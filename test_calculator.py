# test_calculator_v1.py
import unittest
import os
import sys

# أضف المجلد الحالي إلى مسار Python
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from calculator import calculate

class TestCalculator(unittest.TestCase):
    
    def test_addition(self):
        self.assertEqual(calculate('+', 2, 2), 4)
    
    def test_division_by_zero(self):
        self.assertEqual(calculate('/', 5, 0), "Error: Cannot divide by zero")

if __name__ == "__main__":
    unittest.main()