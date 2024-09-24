library(shiny)

ui <- fluidPage(
  HTML('
  <html>
<head>
    <title>ArxEd SPARC</title>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <style> 
      body{background-color:#27396A}
    </style>
</head>

<body>
<iframe title="ArxEd Yeti" width="1140" height="541.25" src="https://arxed-inc.github.io/camps/" frameborder="0" allowFullScreen="true" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
</body>
</html>
  
      ')
  
)

server <- function(input, output, session) {
  # Server logic goes here
  
  
}

shinyApp(ui = ui, server = server)