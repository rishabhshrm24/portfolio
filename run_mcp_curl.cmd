@echo off
echo {"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"copilot-cli","version":"1.0.0"}}} > init.json

curl -i -s -X POST http://127.0.0.1:3845/mcp -H "Accept: application/json, text/event-stream" -H "Content-Type: application/json" --data-binary @init.json > init_response.txt

for /f "tokens=2" %%i in ('findstr /i "mcp-session-id:" init_response.txt') do set SESSION_ID=%%i

if "%SESSION_ID%"=="" (
    echo Failed to capture session ID.
    type init_response.txt
    exit /b 1
)

echo Captured Session ID: %SESSION_ID%

echo {"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_metadata","arguments":{"nodeId":"0:1","clientLanguages":["typescript"],"clientFrameworks":["nextjs"]}}} > metadata_call.json

curl -s -X POST http://127.0.0.1:3845/mcp -H "Accept: application/json, text/event-stream" -H "Content-Type: application/json" -H "mcp-session-id: %SESSION_ID%" --data-binary @metadata_call.json > metadata_response.txt

powershell.exe -Command "$metadataOutput = Get-Content metadata_response.txt; $decodedPayload = ''; foreach ($line in $metadataOutput) { if ($line -like 'data: *') { $jsonStr = $line.Substring(6); try { $payload = $jsonStr | ConvertFrom-Json; $decodedPayload += ($payload | ConvertTo-Json -Depth 10) + \"`n\"; } catch { } } }; Write-Host '--- Decoded Metadata Payload (First 120 lines) ---'; $payloadLines = $decodedPayload -split \"`n\"; $payloadLines | Select-Object -First 120; $searchTerms = @('No data yet', 'Design System', 'Screens', 'Responsive', '1440', '768', '375'); Write-Host '`n--- Search Results ---'; foreach ($term in $searchTerms) { if ($decodedPayload -match [regex]::Escape($term)) { Write-Host \"Found: $term\" } }; $nodeMatch = [regex]::Match($decodedPayload, '\"nodeId\":\s*\"([^\"]+)\"[^}]*No data yet'); if ($nodeMatch.Success) { $newNodeId = $nodeMatch.Groups[1].Value; Write-Host \"`nFound node with 'No data yet': $newNodeId\"; $contextCall = '{\"jsonrpc\":\"2.0\",\"id\":3,\"method\":\"tools/call\",\"params\":{\"name\":\"get_design_context\",\"arguments\":{\"nodeId\":\"' + $newNodeId + '\",\"clientLanguages\":[\"typescript\"],\"clientFrameworks\":[\"nextjs\"]}}}'; Set-Content -Path design_context_call.json -Value $contextCall -Encoding UTF8; curl.exe -s -X POST http://127.0.0.1:3845/mcp -H 'Accept: application/json, text/event-stream' -H 'Content-Type: application/json' -H 'mcp-session-id: %SESSION_ID%' --data-binary @design_context_call.json > context_response.txt; $contextOutput = Get-Content context_response.txt; $decodedContext = ''; foreach ($line in $contextOutput) { if ($line -like 'data: *') { $jsonStr = $line.Substring(6); try { $payload = $jsonStr | ConvertFrom-Json; $decodedContext += ($payload | ConvertTo-Json -Depth 10) + \"`n\"; } catch { } } }; Write-Host '`n--- Decoded Context Payload (First 200 lines) ---'; $ctxLines = $decodedContext -split \"`n\"; $ctxLines | Select-Object -First 200; }"
