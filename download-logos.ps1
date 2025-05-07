$skillLogos = @{
    "html5" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    "css3" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    "javascript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    "typescript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    "angular" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    "react" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    "vue" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    "sass" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
}

$outputDir = "src\assets\images\skills"

# Create directory if it doesn't exist
if (!(Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# Download each logo
foreach ($skill in $skillLogos.Keys) {
    $url = $skillLogos[$skill]
    $outputPath = Join-Path $outputDir "$skill.png"
    
    Write-Host "Downloading $skill logo from $url to $outputPath"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Successfully downloaded $skill logo"
    } catch {
        Write-Host "Failed to download $skill logo: $_"
    }
}

Write-Host "All logos downloaded successfully!"
