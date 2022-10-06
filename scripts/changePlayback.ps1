
If (! (Get-Module -Name "AudioDeviceCmdlets" -ListAvailable)) {
        Install-Module -Name AudioDeviceCmdlets
    }


if ((Get-AudioDevice -List | Where-Object {($_.Default -eq $true) -and ($_.Type -like "Playback")}).Name -like "*scarlett*") {
        Get-AudioDevice -List | Where-Object Type -like "Playback" | Where-Object name -like "*caixa*" | Set-AudioDevice
    } else {
        Get-AudioDevice -List | Where-Object Type -like "Playback" | Where-Object name -like "*scarlett*" | Set-AudioDevice
    }