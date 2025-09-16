// Utility function for type-safe event handlers
export const getTargetElement = (e: Event): HTMLElement => {
  return e.currentTarget as HTMLElement
}

// Type-safe style setters
export const setElementStyle = (element: HTMLElement, styles: Partial<CSSStyleDeclaration>) => {
  Object.assign(element.style, styles)
}

// Common hover handlers with type safety
export const createHoverHandlers = (
  enterStyles: Partial<CSSStyleDeclaration>,
  leaveStyles: Partial<CSSStyleDeclaration>
) => ({
  onMouseEnter: (e: React.MouseEvent) => {
    const element = getTargetElement(e.nativeEvent)
    setElementStyle(element, enterStyles)
  },
  onMouseLeave: (e: React.MouseEvent) => {
    const element = getTargetElement(e.nativeEvent)
    setElementStyle(element, leaveStyles)
  }
})