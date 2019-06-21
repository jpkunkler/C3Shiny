#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3AreaSpline <- function(value, names = c("data1"),
                    width = NULL, 
                    height = NULL) {
  
  # forward options using x
  # use as follows: C3AreaSpline(value = list(data1, data2, data3...), names = list("name1", "name2", "name3"...))!
  x = list(
    data = value,
    values = names
  )
  
  # create widget
  htmlwidgets::createWidget(
    name = 'C3AreaSpline',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

#' Shiny bindings for C3Gauge
#'
#' Output and render functions for using C3Gauge within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3AreaSpline
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3AreaSpline-shiny
#'
#' @export
C3AreaSplineOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3AreaSpline', width, height, package = 'C3')
}

#' @rdname C3AreaSpline-shiny
#' @export
renderC3AreaSpline <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3AreaSplineOutput, env, quoted = TRUE)
}