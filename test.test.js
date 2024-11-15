test('add function should return the sum of two numbers', () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(15);
});test('multiply function should return the product of two numbers', () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(50);
});