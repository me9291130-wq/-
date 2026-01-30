def calculate(operation, a, b):
    """
    Simple calculator function
    Supported operations: '+', '-', '*', '/'
    """
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        if b == 0:
            return "Error: Cannot divide by zero"
        return a / b
    else:
        return "Error: Invalid operation"

def run_calculator():
    """Simple interactive calculator"""
    print("Simple Calculator")
    print("Enter 'q' to quit")
    
    while True:
        try:
            # Get input
            user_input = input("Enter calculation (e.g., 5 + 3): ")
            
            # Check for quit
            if user_input.lower() == 'q':
                break
            
            # Parse input
            parts = user_input.split()
            
            if len(parts) != 3:
                print("Error: Please enter in format: number operation number")
                continue
            
            a_str, operation, b_str = parts
            
            # Convert to numbers
            a = float(a_str)
            b = float(b_str)
            
            # Calculate and display result
            result = calculate(operation, a, b)
            print(f"Result: {result}")
            
        except ValueError:
            print("Error: Please enter valid numbers")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    run_calculator()