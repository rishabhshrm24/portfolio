$initJson = '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"copilot-cli","version":"1.0.0"}}}'
Set-Content -Path init.json -Value $initJson -Encoding UTF8

$curlInitArg = '--data-binary', '@init.json'
& curl.exe -i -s -X POST http://127.0.0.1:3845/mcp -H "Accept: application/json, text/event-stream" -H "Content-Type: application/json" $curlInitArg | Out-File -FilePath init_response.txt

$initResp = Get-Content init_response.txt
$sessionId = ""
foreach ($line in $initResp) {
    if ($line -match "mcp-session-id:\s*(.+)") {
        $sessionId = $matches[1].Trim()
    }
}

if ($sessionId) {
    Write-Host "Captured Session ID: $sessionId"
    $metadataCall = '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_metadata","arguments":{"nodeId":"0:1","clientLanguages":["typescript"],"clientFrameworks":["nextjs"]}}}'
    Set-Content -Path metadata_call.json -Value $metadataCall -Encoding UTF8

    $curlMetaArg = '--data-binary', '@metadata_call.json'
    & curl.exe -s -X POST http://127.0.0.1:3845/mcp -H "Accept: application/json, text/event-stream" -H "Content-Type: application/json" -H "mcp-session-id: $sessionId" $curlMetaArg | Out-File -FilePath metadata_response.txt

    $metadataOutput = Get-Content metadata_response.txt
    $decodedPayload = ""
    foreach ($line in $metadataOutput) {
        if ($line -like "data: *") {
            $jsonStr = $line.Substring(6)
            try {
                $payload = $jsonStr | ConvertFrom-Json
                $decodedPayload += ($payload | ConvertTo-Json -Depth 10) + "`n"
            } catch { }
        }
    }

    Write-Host "--- Decoded Metadata Payload (First 120 lines) ---"
    $payloadLines = $decodedPayload -split "`n"
    $payloadLines | Select-Object -First 120

    $searchTerms = @("No data yet", "Design System", "Screens", "Responsive", "1440", "768", "375")
    Write-Host "`n--- Search Results ---"
    foreach ($term in $searchTerms) {
        if ($decodedPayload -match [regex]::Escape($term)) {
            Write-Host "Found: $term"
        }
    }

    if ($decodedPayload -match '"nodeId":\s*"([^"]+)"[^}]*No data yet') {
        $newNodeId = $matches[1]
        Write-Host "`nFound node with 'No data yet': $newNodeId"
        $contextCall = '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_design_context","arguments":{"nodeId":"' + $newNodeId + '","clientLanguages":["typescript"],"clientFrameworks":["nextjs"]}}}'
        Set-Content -Path design_context_call.json -Value $contextCall -Encoding UTF8
        $curlCtxArg = '--data-binary', '@design_context_call.json'
        & curl.exe -s -X POST http://127.0.0.1:3845/mcp -H "Accept: application/json, text/event-stream" -H "Content-Type: application/json" -H "mcp-session-id: $sessionId" $curlCtxArg | Out-File -FilePath context_response.txt
        $contextOutput = Get-Content context_response.txt
        $decodedContext = ""
        foreach ($line in $contextOutput) {
            if ($line -like "data: *") {
                $jsonStr = $line.Substring(6)
                try {
                    $payload = $jsonStr | ConvertFrom-Json
                    $decodedContext += ($payload | ConvertTo-Json -Depth 10) + "`n"
                } catch { }
            }
        }
        Write-Host "`n--- Decoded Context Payload (First 200 lines) ---"
        $ctxLines = $decodedContext -split "`n"
        $ctxLines | Select-Object -First 200
    }
} else {
    Write-Host "Failed to capture session ID."
    Get-Content init_response.txt
}
