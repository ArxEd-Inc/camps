library(shiny)

ui <- fluidPage(
  includeHTML('www/index.html')
  
)

server <- function(input, output, session) {
  # Server logic goes here
  
  observe(print(input$name))
}

shinyApp(ui = ui, server = server)