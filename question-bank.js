const questionBank = {

    Programming: [

        // =========================
        // ASSESSMENT 1
        // Questions 1 - 15
        // =========================

        {
            question: "What is a programming language?",
            answer: "A programming language is a formal language used to write instructions that a computer can execute.",
            explanation: "It allows developers to communicate with computers and build software.",
            example: "C, C++, Java, and Python are programming languages.",
            options: [
                "A programming language is a formal language used to write instructions that a computer can execute.",
                "A programming language is a hardware device used to store data.",
                "A programming language is a tool used only to create images.",
                "A programming language is a physical component inside a computer."
            ]
        },

        {
            question: "What is a program?",
            answer: "A program is a set of instructions written to perform a specific task.",
            explanation: "The computer follows these instructions to produce the required output.",
            example: "A calculator program performs arithmetic operations.",
            options: [
                "A program is a set of instructions written to perform a specific task.",
                "A program is a physical device used to connect computers.",
                "A program is a type of computer memory.",
                "A program is a programming language used only for databases."
            ]
        },

        {
            question: "What is an algorithm?",
            answer: "An algorithm is a step-by-step procedure for solving a problem.",
            explanation: "It defines the logical sequence of operations before implementation in code.",
            example: "Steps to find the largest number among three numbers.",
            options: [
                "An algorithm is a step-by-step procedure for solving a problem.",
                "An algorithm is a computer hardware component.",
                "An algorithm is a programming language.",
                "An algorithm is a type of database."
            ]
        },

        {
            question: "What is a variable?",
            answer: "A variable is a named storage location used to hold a value.",
            explanation: "Its value can change while a program is running.",
            example: "int age = 18;",
            options: [
                "A variable is a named storage location used to hold a value.",
                "A variable is a fixed value that cannot change.",
                "A variable is a type of programming language.",
                "A variable is a computer input device."
            ]
        },

        {
            question: "What is a data type?",
            answer: "A data type defines the kind of value a variable can store.",
            explanation: "It tells the programming language how the stored data should be interpreted.",
            example: "int, float, char, and boolean.",
            options: [
                "A data type defines the kind of value a variable can store.",
                "A data type defines the physical size of a computer.",
                "A data type is used only to display output.",
                "A data type is a programming error."
            ]
        },

        {
            question: "What is a constant?",
            answer: "A constant is a value that should not change during program execution.",
            explanation: "Constants are useful for fixed values such as mathematical or configuration values.",
            example: "const double PI = 3.14159;",
            options: [
                "A constant is a value that should not change during program execution.",
                "A constant is a value that always changes during execution.",
                "A constant is a function used to repeat code.",
                "A constant is a type of computer hardware."
            ]
        },

        {
            question: "What is an operator in programming?",
            answer: "An operator is a symbol used to perform an operation on values or variables.",
            explanation: "Operators can perform arithmetic, comparison, logical, and other operations.",
            example: "+, -, *, /, ==.",
            options: [
                "An operator is a symbol used to perform an operation on values or variables.",
                "An operator is a variable used to store data.",
                "An operator is a file used to save source code.",
                "An operator is a computer device used for input."
            ]
        },

        {
            question: "What is a conditional statement?",
            answer: "A conditional statement executes code based on whether a condition is true or false.",
            explanation: "It allows a program to make decisions.",
            example: "if (age >= 18)",
            options: [
                "A conditional statement executes code based on whether a condition is true or false.",
                "A conditional statement always executes every statement.",
                "A conditional statement is used only to store values.",
                "A conditional statement is a type of computer memory."
            ]
        },

        {
            question: "What is a loop?",
            answer: "A loop repeatedly executes a block of code while a condition is satisfied.",
            explanation: "Loops reduce the need to write the same code repeatedly.",
            example: "for, while, and do-while.",
            options: [
                "A loop repeatedly executes a block of code while a condition is satisfied.",
                "A loop is used only to store data.",
                "A loop is used to create computer hardware.",
                "A loop is a programming language."
            ]
        },

        {
            question: "What is a function?",
            answer: "A function is a reusable block of code designed to perform a specific task.",
            explanation: "Functions improve code organization and reduce duplication.",
            example: "calculateSum() can return the sum of two numbers.",
            options: [
                "A function is a reusable block of code designed to perform a specific task.",
                "A function is a physical part of a computer.",
                "A function is a database table.",
                "A function is a value that cannot be changed."
            ]
        },

        {
            question: "What is debugging?",
            answer: "Debugging is the process of finding and fixing errors in a program.",
            explanation: "Developers use debugging to identify why a program produces incorrect results or fails.",
            example: "Finding why a calculation returns the wrong value.",
            options: [
                "Debugging is the process of finding and fixing errors in a program.",
                "Debugging is the process of creating computer hardware.",
                "Debugging is the process of storing files.",
                "Debugging is the process of designing a database."
            ]
        },

        {
            question: "What is a syntax error?",
            answer: "A syntax error occurs when code violates the rules of a programming language.",
            explanation: "The compiler or interpreter usually reports the error before the program can run correctly.",
            example: "Missing ; in languages such as C++.",
            options: [
                "A syntax error occurs when code violates the rules of a programming language.",
                "A syntax error occurs when the computer has no power.",
                "A syntax error occurs when a program gives the correct result.",
                "A syntax error is a type of computer hardware."
            ]
        },

        {
            question: "What is a logical error?",
            answer: "A logical error occurs when a program runs but produces an incorrect result.",
            explanation: "The syntax may be valid, but the implemented logic is wrong.",
            example: "Using + instead of * in a calculation.",
            options: [
                "A logical error occurs when a program runs but produces an incorrect result.",
                "A logical error occurs only when a computer cannot start.",
                "A logical error is a type of programming language.",
                "A logical error occurs when the source code is deleted."
            ]
        },

        {
            question: "What is source code?",
            answer: "Source code is the human-readable code written by a programmer.",
            explanation: "It contains instructions that are later compiled or interpreted for execution.",
            example: "A Python file containing print(\"Hello\").",
            options: [
                "Source code is the human-readable code written by a programmer.",
                "Source code is the physical memory inside a computer.",
                "Source code is a computer keyboard.",
                "Source code is a type of operating system."
            ]
        },

        {
            question: "What is the difference between a compiler and an interpreter?",
            answer: "A compiler translates code before execution, while an interpreter executes code through an interpreter process.",
            explanation: "Languages can use different execution models, and some modern runtimes combine compilation and interpretation techniques.",
            example: "C++ commonly uses compilation; Python commonly uses an interpreter/runtime.",
            options: [
                "A compiler translates code before execution, while an interpreter executes code through an interpreter process.",
                "A compiler and interpreter are both computer hardware devices.",
                "A compiler stores data while an interpreter creates databases.",
                "A compiler is used only for websites while an interpreter is used only for images."
            ]
        },
                {
            question: "What is the C programming language?",
            answer: "C is a general-purpose, procedural programming language.",
            explanation: "C is widely used for system software, embedded systems, operating systems, and performance-critical applications.",
            example: "Operating-system components and embedded firmware can be written in C.",
            options: [
                "C is a general-purpose, procedural programming language.",
                "C is a database management system.",
                "C is a markup language used to design web pages.",
                "C is an operating system."
            ]
        },

        {
            question: "What is the basic structure of a C program?",
            answer: "A C program typically contains header files, functions, and the main() function.",
            explanation: "Execution normally begins from the main() function.",
            example: "int main() { return 0; }",
            options: [
                "A C program typically contains header files, functions, and the main() function.",
                "A C program contains only variables and no functions.",
                "A C program contains only HTML and CSS files.",
                "A C program must contain only one statement."
            ]
        },

        {
            question: "What is the purpose of main() in C?",
            answer: "main() is the entry point of a C program.",
            explanation: "Program execution begins from the main() function.",
            example: "int main() { printf(\"Hello\"); }",
            options: [
                "main() is the entry point of a C program.",
                "main() is used only to store variables.",
                "main() is used to create header files.",
                "main() is used only for displaying images."
            ]
        },

        {
            question: "What are header files in C?",
            answer: "Header files contain declarations and definitions that can be reused by a C program.",
            explanation: "They provide access to functions and other features supplied by libraries.",
            example: "#include <stdio.h> provides standard input/output functions.",
            options: [
                "Header files contain declarations and definitions that can be reused by a C program.",
                "Header files contain only images used by a program.",
                "Header files are used only to store passwords.",
                "Header files are physical components of a computer."
            ]
        },

        {
            question: "What is a variable in C?",
            answer: "A variable is a named memory location used to store a value.",
            explanation: "The value stored in a variable can change during program execution.",
            example: "int marks = 85;",
            options: [
                "A variable is a named memory location used to store a value.",
                "A variable is a fixed value that cannot change.",
                "A variable is a type of computer hardware.",
                "A variable is a programming language."
            ]
        },

        {
            question: "What are the basic data types in C?",
            answer: "Common basic data types include int, char, float, and double.",
            explanation: "Data types determine what kind of data a variable can represent.",
            example: "int age = 18;",
            options: [
                "Common basic data types include int, char, float, and double.",
                "Common basic data types include HTML, CSS, and JavaScript.",
                "Common basic data types include keyboard, mouse, and monitor.",
                "Common basic data types include file, folder, and browser."
            ]
        },

        {
            question: "What is the difference between int and float in C?",
            answer: "int stores whole numbers, while float stores floating-point numbers.",
            explanation: "Use int for values without decimal parts and float when decimal values are needed.",
            example: "int age = 18; and float price = 99.5f;",
            options: [
                "int stores whole numbers, while float stores floating-point numbers.",
                "int stores only text, while float stores characters.",
                "int stores images, while float stores files.",
                "int and float are both used only for functions."
            ]
        },

        {
            question: "What is an array in C?",
            answer: "An array stores multiple values of the same data type in contiguous memory locations.",
            explanation: "It allows related values to be accessed using an index.",
            example: "int marks[5];",
            options: [
                "An array stores multiple values of the same data type in contiguous memory locations.",
                "An array stores only one value at a time.",
                "An array is a function used to display output.",
                "An array is a type of computer hardware."
            ]
        },

        {
            question: "What is a pointer in C?",
            answer: "A pointer is a variable that stores the memory address of another variable.",
            explanation: "Pointers are important for dynamic memory, arrays, functions, and low-level programming.",
            example: "int *p = &age;",
            options: [
                "A pointer is a variable that stores the memory address of another variable.",
                "A pointer is a variable that stores only text.",
                "A pointer is a programming language.",
                "A pointer is used only to create web pages."
            ]
        },

        {
            question: "What do & and * mean when working with pointers?",
            answer: "& obtains an address, while * accesses the value stored at an address.",
            explanation: "These operators are fundamental to pointer operations in C.",
            example: "p = &age; and value = *p;",
            options: [
                "& obtains an address, while * accesses the value stored at an address.",
                "& creates a loop, while * creates a function.",
                "& stores text, while * stores images.",
                "& and * are used only for displaying output."
            ]
        },

        {
            question: "What is a function in C?",
            answer: "A function is a reusable block of code designed to perform a specific task.",
            explanation: "Functions make programs modular and reduce code repetition.",
            example: "int add(int a, int b)",
            options: [
                "A function is a reusable block of code designed to perform a specific task.",
                "A function is a memory location used to store data.",
                "A function is a physical computer component.",
                "A function is a type of database."
            ]
        },

        {
            question: "What is recursion in C?",
            answer: "Recursion occurs when a function calls itself to solve a problem.",
            explanation: "A recursive function needs a base condition to stop further calls.",
            example: "Calculating factorial using a recursive function.",
            options: [
                "Recursion occurs when a function calls itself to solve a problem.",
                "Recursion occurs when a program is deleted.",
                "Recursion is a type of computer memory.",
                "Recursion is used only for creating images."
            ]
        },

        {
            question: "What is dynamic memory allocation in C?",
            answer: "Dynamic memory allocation allows memory to be allocated during program execution.",
            explanation: "Functions such as malloc(), calloc(), realloc(), and free() are used for managing dynamic memory.",
            example: "int *p = malloc(5 * sizeof(int));",
            options: [
                "Dynamic memory allocation allows memory to be allocated during program execution.",
                "Dynamic memory allocation permanently removes all memory.",
                "Dynamic memory allocation is used only to create functions.",
                "Dynamic memory allocation is a type of programming language."
            ]
        },

        {
            question: "What is a structure in C?",
            answer: "A structure is a user-defined data type that groups related variables of different data types.",
            explanation: "Structures are useful for representing records or complex data.",
            example: "A Student structure can contain name, age, and marks.",
            options: [
                "A structure is a user-defined data type that groups related variables of different data types.",
                "A structure stores only values of one data type.",
                "A structure is a type of loop.",
                "A structure is a computer input device."
            ]
        },

        {
            question: "What is the difference between a structure and an array in C?",
            answer: "An array stores elements of the same type, while a structure can store members of different types.",
            explanation: "Arrays are useful for collections of similar data; structures represent related but different data.",
            example: "int marks[5] is an array; struct Student can contain name, age, and marks.",
            options: [
                "An array stores elements of the same type, while a structure can store members of different types.",
                "An array stores different types, while a structure stores only the same type.",
                "Both arrays and structures can store only one value.",
                "Structures are used only for loops, while arrays are used only for functions."
            ]
        },
                {
            question: "What is Java?",
            answer: "Java is a high-level, object-oriented programming language designed to be portable across platforms.",
            explanation: "Java programs run through the Java Virtual Machine (JVM), which supports the principle “write once, run anywhere.”",
            example: "Java is widely used for enterprise applications, backend systems, and Android-related development.",
            options: [
                "Java is a high-level, object-oriented programming language designed to be portable across platforms.",
                "Java is a database management system used only to store data.",
                "Java is a markup language used to design web pages.",
                "Java is a computer operating system."
            ]
        },

        {
            question: "What are the main features of Java?",
            answer: "Key features include object orientation, platform independence, automatic memory management, security, and multithreading.",
            explanation: "These features make Java suitable for large-scale and portable applications.",
            example: "The same compiled Java bytecode can run on different operating systems with a compatible JVM.",
            options: [
                "Key features include object orientation, platform independence, automatic memory management, security, and multithreading.",
                "Key features include only HTML, CSS, and image processing.",
                "Key features include hardware control and physical memory installation.",
                "Key features include only database tables and queries."
            ]
        },

        {
            question: "What is the JVM?",
            answer: "JVM stands for Java Virtual Machine.",
            explanation: "The JVM executes Java bytecode and provides the runtime environment needed by Java applications.",
            example: "A .class file containing bytecode is executed by the JVM.",
            options: [
                "JVM stands for Java Virtual Machine.",
                "JVM stands for Java Variable Method.",
                "JVM stands for Java Visual Memory.",
                "JVM stands for Java Version Manager."
            ]
        },

        {
            question: "What is the difference between JDK, JRE, and JVM?",
            answer: "JDK is for developing Java applications, JRE provides the runtime environment, and JVM executes bytecode.",
            explanation: "JDK includes tools needed to develop and run Java programs.",
            example: "A developer uses the JDK to compile Java source code.",
            options: [
                "JDK is for developing Java applications, JRE provides the runtime environment, and JVM executes bytecode.",
                "JDK executes only bytecode, JRE develops applications, and JVM stores source code.",
                "JDK and JRE are programming languages, while JVM is a database.",
                "JDK, JRE, and JVM are all types of computer hardware."
            ]
        },

        {
            question: "What is a class in Java?",
            answer: "A class is a blueprint that defines the data and behavior of objects.",
            explanation: "It contains fields, methods, constructors, and other members.",
            example: "class Student { String name; }",
            options: [
                "A class is a blueprint that defines the data and behavior of objects.",
                "A class is a physical component of a computer.",
                "A class is a database table used only for storing numbers.",
                "A class is a loop used to repeat statements."
            ]
        },

        {
            question: "What is an object in Java?",
            answer: "An object is an instance of a class.",
            explanation: "Objects represent entities and contain their own state while using the behavior defined by the class.",
            example: "Student s1 = new Student();",
            options: [
                "An object is an instance of a class.",
                "An object is a programming language.",
                "An object is a type of database query.",
                "An object is a computer memory location only."
            ]
        },

        {
            question: "What is inheritance in Java?",
            answer: "Inheritance allows one class to acquire accessible properties and methods from another class.",
            explanation: "It promotes code reuse and represents an “is-a” relationship.",
            example: "class Dog extends Animal",
            options: [
                "Inheritance allows one class to acquire accessible properties and methods from another class.",
                "Inheritance is used only to delete objects from memory.",
                "Inheritance is a method for storing database records.",
                "Inheritance is used only to create HTML pages."
            ]
        },

        {
            question: "What is method overloading in Java?",
            answer: "Method overloading means defining multiple methods with the same name but different parameter lists.",
            explanation: "It provides multiple ways to perform related operations.",
            example: "add(int, int) and add(double, double).",
            options: [
                "Method overloading means defining multiple methods with the same name but different parameter lists.",
                "Method overloading means deleting a method from a class.",
                "Method overloading means using different class names for every method.",
                "Method overloading means executing only one method in a program."
            ]
        },

        {
            question: "What is method overriding in Java?",
            answer: "Method overriding occurs when a subclass provides its own implementation of an inherited method.",
            explanation: "It is an important mechanism for run-time polymorphism.",
            example: "A Dog class overrides the sound() method inherited from Animal.",
            options: [
                "Method overriding occurs when a subclass provides its own implementation of an inherited method.",
                "Method overriding means creating a new programming language.",
                "Method overriding means changing a variable into a data type.",
                "Method overriding means removing all methods from a class."
            ]
        },

        {
            question: "What is an interface in Java?",
            answer: "An interface defines a contract that implementing classes agree to follow.",
            explanation: "Interfaces are commonly used to achieve abstraction and support multiple type inheritance.",
            example: "class Payment implements Payable",
            options: [
                "An interface defines a contract that implementing classes agree to follow.",
                "An interface is a type of computer hardware.",
                "An interface is used only to store database records.",
                "An interface is a loop used to repeat code."
            ]
        },

        {
            question: "What is exception handling in Java?",
            answer: "Exception handling manages abnormal conditions that occur during program execution.",
            explanation: "Java provides try, catch, finally, throw, and throws for handling exceptions.",
            example: "Handling division by zero with try-catch.",
            options: [
                "Exception handling manages abnormal conditions that occur during program execution.",
                "Exception handling is used only to design user interfaces.",
                "Exception handling is used to store images in memory.",
                "Exception handling is a method of creating hardware."
            ]
        },

        {
            question: "What is garbage collection in Java?",
            answer: "Garbage collection automatically identifies and reclaims memory occupied by objects that are no longer reachable.",
            explanation: "It reduces the need for manual memory deallocation.",
            example: "An unreachable object may later have its memory reclaimed by the JVM.",
            options: [
                "Garbage collection automatically identifies and reclaims memory occupied by objects that are no longer reachable.",
                "Garbage collection permanently deletes all Java programs.",
                "Garbage collection is used only to collect user input.",
                "Garbage collection is a method for creating classes."
            ]
        },

        {
            question: "What is multithreading in Java?",
            answer: "Multithreading allows multiple threads to execute tasks concurrently within a program.",
            explanation: "It can improve responsiveness and resource utilization when tasks can run concurrently.",
            example: "A server can use separate threads to handle multiple client requests.",
            options: [
                "Multithreading allows multiple threads to execute tasks concurrently within a program.",
                "Multithreading allows only one statement to execute in a program.",
                "Multithreading is used only for database storage.",
                "Multithreading is a type of computer hardware."
            ]
        },

        {
            question: "What is the Java Collections Framework?",
            answer: "It is a set of interfaces and classes used to store and manipulate groups of objects.",
            explanation: "It provides reusable data structures and algorithms.",
            example: "ArrayList, HashSet, and HashMap.",
            options: [
                "It is a set of interfaces and classes used to store and manipulate groups of objects.",
                "It is a collection of computer hardware devices.",
                "It is a programming language used only for websites.",
                "It is a framework used only to create operating systems."
            ]
        },

        {
            question: "Why is Java considered platform-independent?",
            answer: "Java source code is compiled into bytecode that can run on any compatible JVM.",
            explanation: "The JVM abstracts many operating-system-specific details from the Java application.",
            example: "The same .class file can run on Windows or Linux with a suitable JVM.",
            options: [
                "Java source code is compiled into bytecode that can run on any compatible JVM.",
                "Java can run only on Windows operating systems.",
                "Java requires different source code for every operating system.",
                "Java is platform-independent because it does not use bytecode."
            ]
        },
                {
            question: "What is Python?",
            answer: "Python is a high-level, general-purpose programming language known for its readable syntax.",
            explanation: "It is widely used in web development, automation, data science, AI, machine learning, and scripting.",
            example: "print(\"Hello, World!\")",
            options: [
                "Python is a high-level, general-purpose programming language known for its readable syntax.",
                "Python is a database management system used only for storing data.",
                "Python is a hardware device used for computer networking.",
                "Python is a markup language used only to create web pages."
            ]
        },

        {
            question: "What are the main features of Python?",
            answer: "Python offers readable syntax, dynamic typing, automatic memory management, extensive libraries, and support for multiple programming paradigms.",
            explanation: "These features make Python useful for both beginners and professional developers.",
            example: "Python is commonly used for automation and AI applications.",
            options: [
                "Python offers readable syntax, dynamic typing, automatic memory management, extensive libraries, and support for multiple programming paradigms.",
                "Python supports only hardware programming and machine installation.",
                "Python provides only database tables and SQL queries.",
                "Python is designed only for creating computer games."
            ]
        },

        {
            question: "What is a variable in Python?",
            answer: "A variable is a name that refers to a value or object.",
            explanation: "Python determines the type at runtime, so explicit type declaration is usually not required.",
            example: "age = 18",
            options: [
                "A variable is a name that refers to a value or object.",
                "A variable is a fixed value that can never change.",
                "A variable is a physical memory chip.",
                "A variable is a programming language."
            ]
        },

        {
            question: "What are common built-in data types in Python?",
            answer: "Common types include int, float, str, bool, list, tuple, set, and dict.",
            explanation: "Different data types represent different kinds of values and collections.",
            example: "name = \"Alex\" and marks = [80, 90, 85]",
            options: [
                "Common types include int, float, str, bool, list, tuple, set, and dict.",
                "Common types include HTML, CSS, SQL, and HTTP.",
                "Common types include keyboard, mouse, monitor, and printer.",
                "Common types include compiler, interpreter, browser, and server."
            ]
        },

        {
            question: "What is a list in Python?",
            answer: "A list is an ordered, mutable collection of elements.",
            explanation: "Lists can contain multiple values and their contents can be changed after creation.",
            example: "skills = [\"Python\", \"Java\", \"C++\"]",
            options: [
                "A list is an ordered, mutable collection of elements.",
                "A list is an unordered collection that cannot be changed.",
                "A list is a function used to execute code.",
                "A list is a type of operating system."
            ]
        },

        {
            question: "What is a tuple in Python?",
            answer: "A tuple is an ordered, immutable collection of elements.",
            explanation: "Once created, its elements cannot normally be changed.",
            example: "coordinates = (10, 20)",
            options: [
                "A tuple is an ordered, immutable collection of elements.",
                "A tuple is an ordered collection that must always be changed.",
                "A tuple is a Python function for handling errors.",
                "A tuple is a database used to store records."
            ]
        },

        {
            question: "What is a dictionary in Python?",
            answer: "A dictionary stores data as key-value pairs.",
            explanation: "It is useful when values need to be associated with unique keys.",
            example: "student = {\"name\": \"Alex\", \"age\": 18}",
            options: [
                "A dictionary stores data as key-value pairs.",
                "A dictionary stores data only as numbers.",
                "A dictionary is used only to create loops.",
                "A dictionary is a Python hardware component."
            ]
        },

        {
            question: "What is a set in Python?",
            answer: "A set is an unordered collection of unique elements.",
            explanation: "Sets are useful for removing duplicates and performing mathematical set operations.",
            example: "skills = {\"Python\", \"Java\", \"Python\"} results in unique values.",
            options: [
                "A set is an unordered collection of unique elements.",
                "A set is an ordered collection that allows duplicate values only.",
                "A set is a function used to define classes.",
                "A set is a file used to store Python source code."
            ]
        },

        {
            question: "What is a function in Python?",
            answer: "A function is a reusable block of code that performs a specific task.",
            explanation: "Functions improve code organization and reduce repetition.",
            example: "def calculate_total(price, tax):",
            options: [
                "A function is a reusable block of code that performs a specific task.",
                "A function is a type of computer memory.",
                "A function is a fixed value that cannot change.",
                "A function is a physical computer device."
            ]
        },

        {
            question: "What is a lambda function in Python?",
            answer: "A lambda is a small anonymous function written using the lambda keyword.",
            explanation: "It is useful for short operations, especially when used with functions such as map() and filter().",
            example: "square = lambda x: x * x",
            options: [
                "A lambda is a small anonymous function written using the lambda keyword.",
                "A lambda is a database table used to store values.",
                "A lambda is a Python class used only for inheritance.",
                "A lambda is a computer device used for networking."
            ]
        },

        {
            question: "What is list comprehension in Python?",
            answer: "List comprehension is a concise way to create a list from an iterable.",
            explanation: "It can combine iteration and optional filtering in a compact expression.",
            example: "[x * 2 for x in range(5)]",
            options: [
                "List comprehension is a concise way to create a list from an iterable.",
                "List comprehension is a method for deleting Python lists.",
                "List comprehension is a type of database query.",
                "List comprehension is used only to create classes."
            ]
        },

        {
            question: "What is exception handling in Python?",
            answer: "Exception handling manages runtime errors using constructs such as try and except.",
            explanation: "It allows a program to respond to errors without unexpectedly terminating.",
            example: "Handling invalid input using try-except.",
            options: [
                "Exception handling manages runtime errors using constructs such as try and except.",
                "Exception handling is used only to create variables.",
                "Exception handling is used to install Python.",
                "Exception handling is a method of creating hardware."
            ]
        },

        {
            question: "What is a module in Python?",
            answer: "A module is a Python file containing reusable code such as functions, classes, or variables.",
            explanation: "Modules help organize large programs into manageable components.",
            example: "import math",
            options: [
                "A module is a Python file containing reusable code such as functions, classes, or variables.",
                "A module is a physical computer component.",
                "A module is a database server used by Python.",
                "A module is a type of loop."
            ]
        },

        {
            question: "What is a package in Python?",
            answer: "A package is a structured collection of Python modules organized under a common namespace.",
            explanation: "Packages help developers organize and distribute related functionality.",
            example: "numpy provides modules and functionality for numerical computing.",
            options: [
                "A package is a structured collection of Python modules organized under a common namespace.",
                "A package is a single variable that stores one value.",
                "A package is a hardware device used to run Python.",
                "A package is a type of programming error."
            ]
        },

        {
            question: "What is a virtual environment in Python?",
            answer: "A virtual environment is an isolated environment for a Python project and its dependencies.",
            explanation: "It prevents different projects from interfering with each other's package versions.",
            example: "python -m venv myenv",
            options: [
                "A virtual environment is an isolated environment for a Python project and its dependencies.",
                "A virtual environment is a physical computer used to run Python.",
                "A virtual environment is a database containing Python programs.",
                "A virtual environment is a programming language."
            ]
        },
                {
            question: "What is Object-Oriented Programming (OOP)?",
            answer: "OOP is a programming approach that organizes software using objects and classes.",
            explanation: "Objects combine data and the functions that operate on that data.",
            example: "A Student class can contain name, age, and a displayDetails() method.",
            options: [
                "OOP is a programming approach that organizes software using objects and classes.",
                "OOP is a database system used to store files.",
                "OOP is a hardware device used for programming.",
                "OOP is a markup language used to design web pages."
            ]
        },

        {
            question: "What is encapsulation?",
            answer: "Encapsulation means combining data and related methods inside a class and controlling access to the data.",
            explanation: "It helps protect data from unwanted direct access.",
            example: "A BankAccount class can keep balance private and provide deposit() and withdraw() methods.",
            options: [
                "Encapsulation means combining data and related methods inside a class and controlling access to the data.",
                "Encapsulation means deleting all data from a class.",
                "Encapsulation means creating only database tables.",
                "Encapsulation means executing a program repeatedly."
            ]
        },

        {
            question: "What is abstraction?",
            answer: "Abstraction means hiding unnecessary implementation details and showing only the essential features.",
            explanation: "The user uses the functionality without needing to know how it works internally.",
            example: "When using an ATM, you select “Withdraw” without knowing the internal banking process.",
            options: [
                "Abstraction means hiding unnecessary implementation details and showing only the essential features.",
                "Abstraction means showing every internal implementation detail.",
                "Abstraction means storing data without using classes.",
                "Abstraction means deleting unnecessary source code."
            ]
        },

        {
            question: "What is inheritance?",
            answer: "Inheritance allows one class to acquire properties and methods from another class.",
            explanation: "It promotes code reuse and represents an is-a relationship.",
            example: "A Car class can inherit common features from a Vehicle class.",
            options: [
                "Inheritance allows one class to acquire properties and methods from another class.",
                "Inheritance means deleting properties from a class.",
                "Inheritance is used only for database storage.",
                "Inheritance means creating a new programming language."
            ]
        },

        {
            question: "What is polymorphism?",
            answer: "Polymorphism means “many forms,” where the same interface or method name can behave differently depending on the object.",
            explanation: "It allows flexible and reusable program design.",
            example: "A draw() method can behave differently for Circle, Rectangle, and Triangle.",
            options: [
                "Polymorphism means “many forms,” where the same interface or method name can behave differently depending on the object.",
                "Polymorphism means one object can have only one behavior.",
                "Polymorphism is a method of storing data in a database.",
                "Polymorphism is used only to create computer hardware."
            ]
        },

        {
            question: "What is method overriding?",
            answer: "Method overriding occurs when a child class provides its own implementation of a method inherited from its parent class.",
            explanation: "It is commonly used to achieve runtime polymorphism.",
            example: "A Dog class can override the sound() method of an Animal class.",
            options: [
                "Method overriding occurs when a child class provides its own implementation of a method inherited from its parent class.",
                "Method overriding means creating a method without a class.",
                "Method overriding means deleting an inherited method permanently.",
                "Method overriding is used only for database operations."
            ]
        },

        {
            question: "What is method overloading?",
            answer: "Method overloading means using the same method name with different parameter lists.",
            explanation: "It allows a method to perform similar operations with different inputs.",
            example: "calculate(int a, int b) and calculate(int a, int b, int c).",
            options: [
                "Method overloading means using the same method name with different parameter lists.",
                "Method overloading means using different names for the same method.",
                "Method overloading means deleting all parameters from a method.",
                "Method overloading is used only to create databases."
            ]
        },

        {
            question: "What is the difference between composition and inheritance?",
            answer: "Inheritance represents an is-a relationship, while composition represents a has-a relationship.",
            explanation: "Composition builds a class using objects of other classes and often provides more flexible design.",
            example: "A Car has an Engine, so Car can use composition.",
            options: [
                "Inheritance represents an is-a relationship, while composition represents a has-a relationship.",
                "Inheritance represents a has-a relationship, while composition represents an is-a relationship.",
                "Both inheritance and composition always represent the same relationship.",
                "Composition is used only for creating functions."
            ]
        },

        {
            question: "What is an interface?",
            answer: "An interface defines a contract that implementing classes must follow.",
            explanation: "It is useful for achieving abstraction and allowing different classes to follow the same set of behaviors.",
            example: "A Payment interface can define pay(), which can be implemented by UPIPayment, CardPayment, and WalletPayment.",
            options: [
                "An interface defines a contract that implementing classes must follow.",
                "An interface is a variable used to store numbers.",
                "An interface is a database used to store records.",
                "An interface is a loop used to repeat code."
            ]
        },

        {
            question: "What are the SOLID principles?",
            answer: "SOLID is a group of five principles used to design maintainable and flexible object-oriented software.",
            explanation: "SOLID stands for: S – Single Responsibility Principle; O – Open/Closed Principle; L – Liskov Substitution Principle; I – Interface Segregation Principle; D – Dependency Inversion Principle.",
            example: "A class should ideally have one clear responsibility instead of handling unrelated tasks.",
            options: [
                "SOLID is a group of five principles used to design maintainable and flexible object-oriented software.",
                "SOLID is a group of database commands used to store data.",
                "SOLID is a programming language used for web development.",
                "SOLID is a hardware design used in computers."
            ]
        },

        {
            question: "What is a data structure?",
            answer: "A data structure is a way of organizing and storing data so that it can be accessed and processed efficiently.",
            explanation: "Different data structures are suitable for different types of problems.",
            example: "An array can store a list of student marks.",
            options: [
                "A data structure is a way of organizing and storing data so that it can be accessed and processed efficiently.",
                "A data structure is a programming language.",
                "A data structure is a computer hardware component.",
                "A data structure is a type of operating system."
            ]
        },

        {
            question: "What is an array?",
            answer: "An array is a collection of elements stored in an ordered sequence, usually accessed using an index.",
            explanation: "Arrays are useful when we need to store multiple values of the same general type in a structured way.",
            example: "marks = [80, 75, 90, 85]",
            options: [
                "An array is a collection of elements stored in an ordered sequence, usually accessed using an index.",
                "An array stores only one value and cannot use an index.",
                "An array is a function used to execute a program.",
                "An array is a database server."
            ]
        },

        {
            question: "What is a linked list?",
            answer: "A linked list is a data structure made up of nodes, where each node stores data and a link to another node.",
            explanation: "Unlike a traditional array, linked-list elements do not need to be stored next to each other in memory.",
            example: "10 → 20 → 30 → 40",
            options: [
                "A linked list is a data structure made up of nodes, where each node stores data and a link to another node.",
                "A linked list stores values only in a single fixed memory location.",
                "A linked list is a type of programming language.",
                "A linked list is a computer input device."
            ]
        },

        {
            question: "What is a stack?",
            answer: "A stack is a linear data structure that follows LIFO (Last In, First Out).",
            explanation: "The most recently added element is removed first.",
            example: "The browser's Back operation can be modeled using a stack.",
            options: [
                "A stack is a linear data structure that follows LIFO (Last In, First Out).",
                "A stack is a linear data structure that follows only FIFO.",
                "A stack is a database used to store records.",
                "A stack is a programming language."
            ]
        },

        {
            question: "What is a queue?",
            answer: "A queue is a linear data structure that generally follows FIFO (First In, First Out).",
            explanation: "The element added first is normally processed first.",
            example: "A printer queue processes print jobs in order.",
            options: [
                "A queue is a linear data structure that generally follows FIFO (First In, First Out).",
                "A queue always follows LIFO (Last In, First Out).",
                "A queue is a programming language used to create websites.",
                "A queue is a hardware component used for storage."
            ]
        },

        {
            question: "What is a hash table?",
            answer: "A hash table stores data using key-value pairs and uses a hash function to determine where values are stored.",
            explanation: "It can provide very fast average-case lookup, insertion, and deletion.",
            example: "{\"id\": 101, \"name\": \"Arun\"}",
            options: [
                "A hash table stores data using key-value pairs and uses a hash function to determine where values are stored.",
                "A hash table stores data only as sequential numbers.",
                "A hash table is a type of computer monitor.",
                "A hash table is used only to create loops."
            ]
        }

    ],
   "Web Development": [

{
    question: "What is HTML, and why is it used in web development?",
    answer: "HTML stands for HyperText Markup Language. It is used to create and structure web pages.",
    explanation: "HTML tells the browser how to display headings, paragraphs, images, links, and other webpage elements.",
    example: "<h1>Welcome to Skill Sense</h1>\n<p>Learn and improve your skills.</p>",
    options: [
        "HTML stands for HyperText Markup Language. It is used to create and structure web pages.",
        "HTML is a hardware device used to store data.",
        "HTML is a programming language used only to create images.",
        "HTML is a physical component inside a computer."
    ]
},

{
    question: "What is the basic structure of an HTML document?",
    answer: "An HTML document contains the DOCTYPE, html, head, title, and body elements.",
    explanation: "These elements organize a webpage and help the browser understand how to display its content.",
    example: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Website</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>",
    options: [
        "Only the body element",
        "An HTML document contains the DOCTYPE, html, head, title, and body elements.",
        "CSS selectors and JavaScript functions",
        "A database table and server configuration"
    ]
},

{
    question: "What is the purpose of the DOCTYPE declaration in HTML?",
    answer: "The DOCTYPE declaration tells the browser to render the page using modern HTML standards.",
    explanation: "It helps the browser display the webpage in standards mode instead of quirks mode.",
    example: "<!DOCTYPE html>",
    options: [
        "To delete old HTML code",
        "To add JavaScript automatically",
        "The DOCTYPE declaration tells the browser to render the page using modern HTML standards.",
        "To change the page title"
    ]
},

{
    question: "What is the difference between the head and body elements?",
    answer: "The head contains metadata and resource references, while the body contains the visible webpage content.",
    explanation: "The title, stylesheet links, and metadata usually go inside head. Headings, images, and paragraphs go inside body.",
    example: "<head>\n    <title>Skill Sense</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n</body>",
    options: [
        "The head contains metadata and resource references, while the body contains the visible webpage content.",
        "The head only contains visible content",
        "The body only contains images and links",
        "The head stores database records"
    ]
},

{
    question: "What are HTML tags and elements?",
    answer: "Tags are markup instructions written inside angle brackets. An element consists of its tags and the content between them, when applicable.",
    explanation: "Tags define how content is structured. Elements are the complete building blocks of an HTML page.",
    example: "<p>This is a paragraph.</p>",
    options: [
        "Tags are markup instructions written inside angle brackets. An element consists of its tags and the content between them, when applicable.",
        "An HTML element is only the opening tag",
        "An HTML element is only the text displayed on a page",
        "An HTML element is a physical part of the computer"
    ]
},

{
    question: "What are HTML attributes?",
    answer: "HTML attributes provide additional information or configuration for HTML elements.",
    explanation: "Attributes are commonly written in the opening tag and often use a name-value pair.",
    example: "<img src=\"logo.jpeg\" alt=\"Skill Sense Logo\">",
    options: [
        "HTML attributes provide additional information or configuration for HTML elements.",
        "HTML attributes only change the webpage background",
        "HTML attributes are always written in CSS files",
        "HTML attributes are used only for JavaScript"
    ]
},

{
    question: "What is the difference between block-level and inline elements?",
    answer: "Block-level elements normally begin on a new line, while inline elements flow within the surrounding text.",
    explanation: "A heading or paragraph generally occupies its own line. A link or emphasis element usually stays within a line of text.",
    example: "<div>Block element</div>\n<span>Inline element</span>",
    options: [
        "Block-level elements normally begin on a new line, while inline elements flow within the surrounding text.",
        "Both types always start on a new line",
        "Both types always remain in the same line",
        "Inline elements always contain block elements"
    ]
},

{
    question: "How do you create headings in HTML?",
    answer: "HTML provides six heading levels, from h1 to h6.",
    explanation: "These headings organize content into a hierarchy, with h1 representing the highest level.",
    example: "<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Section Heading</h3>",
    options: [
        "HTML provides six heading levels, from h1 to h6.",
        "HTML provides only h1 and h2",
        "HTML provides heading levels from h1 to h3 only",
        "HTML provides heading levels from h0 to h5"
    ]
},

{
    question: "How do you create hyperlinks in HTML?",
    answer: "The anchor element, a, creates hyperlinks using the href attribute.",
    explanation: "A hyperlink lets users navigate to another page, website, or location.",
    example: "<a href=\"https://example.com\">Visit Website</a>",
    options: [
        "The anchor element, a, creates hyperlinks using the href attribute.",
        "The image element using the src attribute",
        "The paragraph element using the href attribute",
        "The heading element using the link attribute"
    ]
},

{
    question: "How do you insert an image into an HTML page?",
    answer: "The img element displays an image using the src attribute.",
    explanation: "The src specifies the image location, while alt provides alternative text if the image cannot be displayed or is accessed through assistive technology.",
    example: "<img src=\"robot.jpeg\" alt=\"AI Robot\">",
    options: [
        "The img element displays an image using the src attribute.",
        "The link element displays an image using href",
        "The video element displays an image using src",
        "The form element displays an image using action"
    ]
},

{
    question: "What is semantic HTML?",
    answer: "Semantic HTML uses elements that describe the meaning and purpose of their content.",
    explanation: "Elements such as header, nav, main, article, and footer make webpage structure easier to understand.",
    example: "<header>Skill Sense</header>\n<main>\n    <article>Learning Content</article>\n</main>\n<footer>Copyright 2026</footer>",
    options: [
        "Semantic HTML uses elements that describe the meaning and purpose of their content.",
        "Semantic HTML uses only CSS styles",
        "Semantic HTML uses elements only for images",
        "Semantic HTML uses elements that execute JavaScript automatically"
    ]
},

{
    question: "What is the difference between ordered and unordered lists?",
    answer: "An ordered list uses ol to display numbered items, while an unordered list uses ul to display bulleted items.",
    explanation: "Use numbered lists when sequence matters and bulleted lists when the order is not important.",
    example: "<ol>\n    <li>Learn HTML</li>\n    <li>Learn CSS</li>\n</ol>\n<ul>\n    <li>Programming</li>\n    <li>Database</li>\n</ul>",
    options: [
        "An ordered list uses ol to display numbered items, while an unordered list uses ul to display bulleted items.",
        "Both lists display only numbered items",
        "ol displays bullets and ul displays numbers",
        "Lists can only contain text and cannot contain list items"
    ]
},

{
    question: "What is the purpose of HTML comments?",
    answer: "HTML comments allow developers to add notes that are not displayed as webpage content.",
    explanation: "Comments help explain sections of code and make projects easier to maintain.",
    example: "<!-- Main navigation section -->\n<nav>\n    <a href=\"index.html\">Home</a>\n</nav>",
    options: [
        "HTML comments allow developers to add notes that are not displayed as webpage content.",
        "HTML comments are notes that are visible to visitors",
        "HTML comments execute JavaScript code",
        "HTML comments automatically change CSS styles"
    ]
},

{
    question: "What is CSS, and why is it used?",
    answer: "CSS stands for Cascading Style Sheets. It controls the appearance and layout of HTML elements.",
    explanation: "CSS makes webpages attractive by styling colors, fonts, backgrounds, spacing, and layouts.",
    example: "h1 {\n    color: purple;\n    font-size: 32px;\n}",
    options: [
        "CSS stands for Cascading Style Sheets. It controls the appearance and layout of HTML elements.",
        "CSS adds database tables to a webpage",
        "CSS is used only to run server-side programs",
        "CSS is an image file format"
    ]
},

{
    question: "What are the different ways to apply CSS to HTML?",
    answer: "CSS can be applied using inline, internal, and external styles.",
    explanation: "Inline CSS styles one element directly. Internal CSS is written inside a style element, while external CSS is stored in a separate file.",
    example: "<link rel=\"stylesheet\" href=\"style.css\">",
    options: [
        "CSS can be applied using inline, internal, and external styles.",
        "CSS can be applied using only inline styles",
        "CSS can be applied using only external styles",
        "CSS can be applied using only JavaScript styles"
    ]
},
{
    question: "What is a CSS selector?",
    answer: "A CSS selector identifies the HTML elements to which styles should be applied.",
    explanation: "Selectors allow developers to style elements by tag name, class, ID, or other conditions.",
    example: `p {
    color: blue;
}`,
    options: [
        "A CSS selector identifies the HTML elements to which styles should be applied.",
        "A CSS selector creates a new HTML document",
        "A CSS selector stores data in the browser",
        "A CSS selector connects a webpage to a database"
    ]
},

{
    question: "What is the difference between class and ID selectors?",
    answer: "A class can be reused on multiple elements, while an ID should uniquely identify an element within a page.",
    explanation: "Use classes for reusable styling and IDs for unique elements.",
    example: `<p class="description">Welcome</p>
<h1 id="main-title">Skill Sense</h1>
.description {
    color: gray;
}
#main-title {
    color: purple;
}`,
    options: [
        "A class can be reused on multiple elements, while an ID should uniquely identify an element within a page.",
        "A class can only be used once, while an ID can be reused",
        "Classes and IDs are exactly the same",
        "An ID is used only for JavaScript and cannot be used in CSS"
    ]
},

{
    question: "What is the CSS box model?",
    answer: "The CSS box model consists of content, padding, border, and margin.",
    explanation: "It explains how an element's content and surrounding spaces contribute to its size and layout.",
    example: `.card {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}`,
    options: [
        "The CSS box model consists of content, padding, border, and margin.",
        "The CSS box model consists only of width and height",
        "The CSS box model consists of HTML, JavaScript, and Python",
        "The CSS box model consists only of margin and color"
    ]
},

{
    question: "What is the difference between margin and padding?",
    answer: "Margin creates space outside an element's border, while padding creates space between its content and border.",
    explanation: "Margin separates elements from each other. Padding creates breathing room inside an element.",
    example: `.card {
    margin: 20px;
    padding: 15px;
}`,
    options: [
        "Margin creates space outside an element's border, while padding creates space between its content and border.",
        "Margin creates space inside the content, while padding creates space outside the border",
        "Margin and padding always behave exactly the same",
        "Padding is used only for text color"
    ]
},

{
    question: "How do you change text color and background color using CSS?",
    answer: "The color property changes text color, and background-color changes an element's background color.",
    explanation: "These properties help establish a website's visual style and improve readability.",
    example: `body {
    background-color: #f0f0ff;
    color: #222222;
}`,
    options: [
        "The color property changes text color, and background-color changes an element's background color.",
        "The font property changes both text and background colors",
        "The margin property changes text and background colors",
        "The display property changes text and background colors"
    ]
},

{
    question: "What is CSS Flexbox?",
    answer: "Flexbox is a CSS layout system used to arrange elements in a row or column.",
    explanation: "It helps align items, distribute available space, and build flexible layouts.",
    example: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
    options: [
        "Flexbox is a CSS layout system used to arrange elements in a row or column.",
        "Flexbox is a JavaScript database",
        "Flexbox is an HTML image format",
        "Flexbox is used only to add animations"
    ]
},

{
    question: "What is CSS Grid?",
    answer: "CSS Grid is a layout system used to arrange elements in rows and columns.",
    explanation: "Grid is useful for designing structured layouts such as dashboards, galleries, and card collections.",
    example: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}`,
    options: [
        "CSS Grid is a layout system used to arrange elements in rows and columns.",
        "CSS Grid is used only to change text color",
        "CSS Grid is a programming language",
        "CSS Grid is a browser storage system"
    ]
},

{
    question: "What is the purpose of the CSS position property?",
    answer: "The position property controls how an element is positioned within a webpage.",
    explanation: "Common values include static, relative, absolute, fixed, and sticky.",
    example: `.header {
    position: sticky;
    top: 0;
}`,
    options: [
        "The position property controls how an element is positioned within a webpage.",
        "The position property changes the database structure",
        "The position property creates HTML forms",
        "The position property changes JavaScript variables"
    ]
},

{
    question: "What are CSS pseudo-classes?",
    answer: "Pseudo-classes style elements when they are in a particular state or position.",
    explanation: "They can change the appearance of buttons when users hover over them or inputs when they receive focus.",
    example: `button:hover {
    background-color: purple;
    color: white;
}`,
    options: [
        "Pseudo-classes style elements when they are in a particular state or position.",
        "Pseudo-classes create new HTML documents",
        "Pseudo-classes store information in localStorage",
        "Pseudo-classes are used only to create images"
    ]
},

{
    question: "What are CSS transitions?",
    answer: "CSS transitions allow property changes to occur gradually over a specified duration.",
    explanation: "They make interactions smoother instead of changing styles instantly.",
    example: `button {
    transition: background-color 0.3s ease;
}`,
    options: [
        "CSS transitions allow property changes to occur gradually over a specified duration.",
        "CSS transitions are used to store browser data",
        "CSS transitions create database tables",
        "CSS transitions are used only for HTML headings"
    ]
},

{
    question: "What is the purpose of the z-index property?",
    answer: "The z-index property controls the stacking order of positioned elements and certain other layout elements.",
    explanation: "It helps determine which overlapping element appears in front of another.",
    example: `.modal {
    position: fixed;
    z-index: 1000;
}`,
    options: [
        "The z-index property controls the stacking order of positioned elements and certain other layout elements.",
        "The z-index property changes the font size",
        "The z-index property controls database connections",
        "The z-index property validates HTML forms"
    ]
},

{
    question: "What is JavaScript, and why is it used in web development?",
    answer: "JavaScript is a programming language used to add interactivity and dynamic behavior to webpages.",
    explanation: "It can respond to clicks, validate forms, update content, and communicate with servers.",
    example: `alert("Welcome to Skill Sense!");`,
    options: [
        "JavaScript is a programming language used to add interactivity and dynamic behavior to webpages.",
        "JavaScript is a markup language used only for page structure",
        "JavaScript is a database management system",
        "JavaScript is a CSS layout framework"
    ]
},

{
    question: "What is the difference between var, let, and const?",
    answer: "They declare variables, but differ in scope and reassignment rules.",
    explanation: "let allows reassignment within its scope. const prevents reassignment of the binding. var has function scope and permits redeclaration in the same scope.",
    example: `let score = 80;
score = 90;
const userName = "Alex";
var age = 20;`,
    options: [
        "They declare variables, but differ in scope and reassignment rules.",
        "They are three different HTML tags",
        "They are three CSS layout systems",
        "They are used only for database queries"
    ]
},

{
    question: "What are JavaScript data types?",
    answer: "JavaScript data types include strings, numbers, booleans, undefined, null, BigInt, symbols, and objects.",
    explanation: "Data types describe the kinds of values a program can work with.",
    example: `let name = "Alex";
let score = 95;
let passed = true;
let result = null;`,
    options: [
        "JavaScript data types include strings, numbers, booleans, undefined, null, BigInt, symbols, and objects.",
        "JavaScript data types include only strings and numbers",
        "JavaScript data types include only HTML elements",
        "JavaScript data types include only CSS properties"
    ]
},

{
    question: "What are JavaScript operators?",
    answer: "Operators perform actions such as arithmetic, comparison, assignment, and logical evaluation.",
    explanation: "They help calculate values and make decisions in a program.",
    example: `let total = 10 + 20;
let isPassed = total >= 25;`,
    options: [
        "Operators perform actions such as arithmetic, comparison, assignment, and logical evaluation.",
        "Operators are used only to create HTML elements",
        "Operators are used only to change CSS colors",
        "Operators are used only to store images"
    ]
},
{
    question: "What is a JavaScript function?",
    answer: "A function is a reusable block of code designed to perform a specific task.",
    explanation: "Functions help organize code and avoid repeating the same instructions.",
    example: `function greet() {
    console.log("Hello!");
}`,
    options: [
        "A function is a reusable block of code designed to perform a specific task.",
        "A function is an HTML element used to create headings",
        "A function is a CSS property used for layout",
        "A function is a database table"
    ]
},

{
    question: "What is an event in JavaScript?",
    answer: "An event is an action or occurrence that JavaScript can respond to.",
    explanation: "Common events include clicks, mouse movements, keyboard input, and form submission.",
    example: `button.addEventListener("click", function() {
    alert("Button clicked!");
});`,
    options: [
        "An event is an action or occurrence that JavaScript can respond to.",
        "An event is a CSS color property",
        "An event is an HTML image format",
        "An event is a database command"
    ]
},

{
    question: "What is DOM in JavaScript?",
    answer: "DOM stands for Document Object Model and represents an HTML document as a tree of objects.",
    explanation: "JavaScript can use the DOM to access and modify webpage elements.",
    example: `document.getElementById("title").textContent = "Skill Sense";`,
    options: [
        "DOM stands for Document Object Model and represents an HTML document as a tree of objects.",
        "DOM stands for Data Object Machine",
        "DOM is a CSS framework",
        "DOM is a database management system"
    ]
},

{
    question: "What is the difference between == and === in JavaScript?",
    answer: "The == operator compares values after type conversion, while === compares both value and type without type conversion.",
    explanation: "Using === generally provides stricter and more predictable comparisons.",
    example: `5 == "5";   // true
5 === "5";  // false`,
    options: [
        "The == operator compares values after type conversion, while === compares both value and type without type conversion.",
        "Both operators always perform exactly the same comparison",
        "== compares only strings and === compares only numbers",
        "=== is used only for CSS styling"
    ]
},

{
    question: "What is an array in JavaScript?",
    answer: "An array is a data structure used to store multiple values in a single variable.",
    explanation: "Arrays can contain multiple values and are accessed using indexes.",
    example: `let skills = ["HTML", "CSS", "JavaScript"];`,
    options: [
        "An array is a data structure used to store multiple values in a single variable.",
        "An array is used only to create HTML headings",
        "An array is a CSS animation",
        "An array is a database server"
    ]
},

{
    question: "What is an object in JavaScript?",
    answer: "An object is a collection of related data and functionality stored as key-value pairs.",
    explanation: "Objects are useful for representing real-world entities and structured information.",
    example: `let student = {
    name: "Alex",
    age: 20
};`,
    options: [
        "An object is a collection of related data and functionality stored as key-value pairs.",
        "An object is only a CSS layout container",
        "An object is an HTML comment",
        "An object is a database connection"
    ]
},

{
    question: "What is JSON?",
    answer: "JSON stands for JavaScript Object Notation and is a lightweight format for storing and exchanging data.",
    explanation: "JSON is commonly used when sending data between a web browser and a server.",
    example: `{
    "name": "Alex",
    "score": 90
}`,
    options: [
        "JSON stands for JavaScript Object Notation and is a lightweight format for storing and exchanging data.",
        "JSON is a CSS styling language",
        "JSON is an HTML image element",
        "JSON is a database programming language"
    ]
},

{
    question: "What is responsive web design?",
    answer: "Responsive web design is an approach that makes websites adapt to different screen sizes and devices.",
    explanation: "It ensures websites work well on desktops, tablets, and mobile phones.",
    example: `@media (max-width: 600px) {
    .container {
        width: 100%;
    }
}`,
    options: [
        "Responsive web design is an approach that makes websites adapt to different screen sizes and devices.",
        "Responsive design is used only for desktop computers",
        "Responsive design is a JavaScript database",
        "Responsive design is used only to create animations"
    ]
},

{
    question: "What are media queries in CSS?",
    answer: "Media queries are CSS rules used to apply styles based on device or screen characteristics.",
    explanation: "They are commonly used to create responsive websites.",
    example: `@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}`,
    options: [
        "Media queries are CSS rules used to apply styles based on device or screen characteristics.",
        "Media queries are JavaScript functions for database access",
        "Media queries are HTML tags for images",
        "Media queries are used only for storing browser data"
    ]
},

{
    question: "What is the viewport meta tag?",
    answer: "The viewport meta tag controls how a webpage is displayed on mobile devices.",
    explanation: "It helps the webpage match the device's screen width and improves responsive behavior.",
    example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    options: [
        "The viewport meta tag controls how a webpage is displayed on mobile devices.",
        "It controls only the website's database",
        "It is used only to change text color",
        "It creates JavaScript functions"
    ]
},

{
    question: "Why is responsive design important?",
    answer: "Responsive design is important because users access websites using devices with different screen sizes.",
    explanation: "A responsive website provides a better user experience across desktops, tablets, and mobile devices.",
    example: `@media (max-width: 600px) {
    .menu {
        display: block;
    }
}`,
    options: [
        "Responsive design is important because users access websites using devices with different screen sizes.",
        "Responsive design is important only for increasing database storage",
        "Responsive design is used only for desktop applications",
        "Responsive design prevents JavaScript from running"
    ]
},

{
    question: "What is a mobile-first design approach?",
    answer: "Mobile-first design means designing a website for small screens first and then enhancing it for larger screens.",
    explanation: "This approach focuses on essential content and functionality for mobile users before adding larger-screen features.",
    example: `body {
    font-size: 16px;
}

@media (min-width: 768px) {
    body {
        font-size: 18px;
    }
}`,
    options: [
        "Mobile-first design means designing a website for small screens first and then enhancing it for larger screens.",
        "Mobile-first means designing only for desktop computers",
        "Mobile-first means using only JavaScript",
        "Mobile-first means removing responsive features"
    ]
},

{
    question: "What is the DOM used for in web development?",
    answer: "The DOM is used to access, modify, add, or remove elements and content in an HTML document.",
    explanation: "JavaScript can interact with the DOM to dynamically update webpages.",
    example: `document.getElementById("message").textContent = "Welcome!";`,
    options: [
        "The DOM is used to access, modify, add, or remove elements and content in an HTML document.",
        "The DOM is used only to style CSS files",
        "The DOM is used only to store passwords",
        "The DOM is used to create database tables"
    ]
},

{
    question: "How do you select an HTML element using its ID in JavaScript?",
    answer: "The getElementById() method is used to select an HTML element by its ID.",
    explanation: "It returns the element that has the specified ID.",
    example: `const title = document.getElementById("title");`,
    options: [
        "The getElementById() method is used to select an HTML element by its ID.",
        "The selectByClass() method is used to select an element by ID",
        "The getElement() method is always required",
        "The queryColor() method selects elements by ID"
    ]
},

{
    question: "What is addEventListener() in JavaScript?",
    answer: "addEventListener() is used to attach an event handler to an HTML element.",
    explanation: "It allows JavaScript to execute a function when a specific event occurs.",
    example: `button.addEventListener("click", function() {
    alert("Hello!");
});`,
    options: [
        "addEventListener() is used to attach an event handler to an HTML element.",
        "addEventListener() is used to create CSS styles",
        "addEventListener() is used to create database tables",
        "addEventListener() is used only to load images"
    ]
}, 
{
    question: "What is form validation in web development?",
    answer: "Form validation checks whether the data entered by a user is correct and complete.",
    explanation: "Validation helps prevent invalid or incomplete data from being submitted.",
    example: `<input type="email" required>`,
    options: [
        "Form validation checks whether the data entered by a user is correct and complete.",
        "Form validation is used only to change page colors",
        "Form validation creates database tables",
        "Form validation is used only for images"
    ]
},

{
    question: "What is client-side validation?",
    answer: "Client-side validation checks user input in the browser before the data is sent to the server.",
    explanation: "It provides quick feedback to users and improves the user experience.",
    example: `<input type="text" required minlength="3">`,
    options: [
        "Client-side validation checks user input in the browser before the data is sent to the server.",
        "Client-side validation checks only database records",
        "Client-side validation is used only for CSS",
        "Client-side validation runs only after the server responds"
    ]
},

{
    question: "What is server-side validation?",
    answer: "Server-side validation checks submitted data on the server before processing or storing it.",
    explanation: "It is important for security because client-side validation can be bypassed.",
    example: `if (username.length < 3) {
    return "Invalid username";
}`,
    options: [
        "Server-side validation checks submitted data on the server before processing or storing it.",
        "Server-side validation happens only inside CSS",
        "Server-side validation is used only to display images",
        "Server-side validation replaces HTML"
    ]
},

{
    question: "What is the required attribute in HTML forms?",
    answer: "The required attribute specifies that a form field must be filled before submission.",
    explanation: "It prevents users from submitting a form without entering required information.",
    example: `<input type="text" name="name" required>`,
    options: [
        "The required attribute specifies that a form field must be filled before submission.",
        "The required attribute changes the background color",
        "The required attribute creates a database",
        "The required attribute is used only for images"
    ]
},

{
    question: "What is the purpose of the input type attribute in HTML forms?",
    answer: "The type attribute specifies the kind of input field and determines how the browser handles the input.",
    explanation: "Common types include text, email, password, number, date, and checkbox.",
    example: `<input type="email" name="email">`,
    options: [
        "The type attribute specifies the kind of input field and determines how the browser handles the input.",
        "The type attribute is used only to change CSS colors",
        "The type attribute creates JavaScript functions",
        "The type attribute connects directly to a database"
    ]
},

{
    question: "What is the difference between GET and POST methods?",
    answer: "GET sends data as part of the URL, while POST sends data in the request body.",
    explanation: "GET is commonly used for retrieving data, while POST is commonly used for submitting data.",
    example: `<form method="post" action="/submit">`,
    options: [
        "GET sends data as part of the URL, while POST sends data in the request body.",
        "GET and POST are CSS properties",
        "POST always sends data in the URL",
        "GET is used only for styling webpages"
    ]
},

{
    question: "What is the Fetch API?",
    answer: "The Fetch API is used to make network requests from JavaScript.",
    explanation: "It allows webpages to request or send data to servers and APIs.",
    example: `fetch("/api/users")
    .then(response => response.json())
    .then(data => console.log(data));`,
    options: [
        "The Fetch API is used to make network requests from JavaScript.",
        "The Fetch API is used only to style HTML elements",
        "The Fetch API creates CSS animations",
        "The Fetch API is used only to store images"
    ]
},

{
    question: "What is an API in web development?",
    answer: "An API is an interface that allows different software applications to communicate with each other.",
    explanation: "Web APIs allow applications to request or send data between clients and servers.",
    example: `fetch("https://example.com/api/data");`,
    options: [
        "An API is an interface that allows different software applications to communicate with each other.",
        "An API is a CSS selector",
        "An API is an HTML heading",
        "An API is a browser theme"
    ]
},

{
    question: "What is localStorage in JavaScript?",
    answer: "localStorage is a browser storage mechanism used to store data as key-value pairs that persist across browser sessions.",
    explanation: "Data stored in localStorage remains available even after the browser is closed, until it is cleared.",
    example: `localStorage.setItem("userName", "Alex");`,
    options: [
        "localStorage is a browser storage mechanism used to store data as key-value pairs that persist across browser sessions.",
        "localStorage is used only for CSS styling",
        "localStorage stores data only until the page refreshes",
        "localStorage is a database server"
    ]
},

{
    question: "What is sessionStorage?",
    answer: "sessionStorage is a browser storage mechanism that stores data for the duration of a page session.",
    explanation: "The stored data is removed when the browser tab or window session ends.",
    example: `sessionStorage.setItem("score", "90");`,
    options: [
        "sessionStorage is a browser storage mechanism that stores data for the duration of a page session.",
        "sessionStorage stores data permanently",
        "sessionStorage is used only to change fonts",
        "sessionStorage is a server-side database"
    ]
},

{
    question: "What is the difference between localStorage and sessionStorage?",
    answer: "localStorage persists until manually cleared, while sessionStorage lasts only for the current page session.",
    explanation: "Both provide key-value storage in the browser, but they differ in how long the data remains available.",
    example: `localStorage.setItem("name", "Alex");
sessionStorage.setItem("score", "90");`,
    options: [
        "localStorage persists until manually cleared, while sessionStorage lasts only for the current page session.",
        "Both storage types always delete data immediately",
        "sessionStorage persists permanently while localStorage lasts only one page",
        "Both are used only for CSS styling"
    ]
},

{
    question: "What is a cookie in web development?",
    answer: "A cookie is a small piece of data stored by a website in the user's browser.",
    explanation: "Cookies can be used for sessions, preferences, tracking, and other browser-based information.",
    example: `document.cookie = "username=Alex";`,
    options: [
        "A cookie is a small piece of data stored by a website in the user's browser.",
        "A cookie is an HTML image format",
        "A cookie is a CSS layout system",
        "A cookie is a programming language"
    ]
},

{
    question: "What is HTTPS?",
    answer: "HTTPS is the secure version of HTTP that encrypts data exchanged between a browser and a server.",
    explanation: "HTTPS helps protect sensitive information from being intercepted during transmission.",
    example: `https://example.com`,
    options: [
        "HTTPS is the secure version of HTTP that encrypts data exchanged between a browser and a server.",
        "HTTPS is a CSS framework",
        "HTTPS is used only for creating images",
        "HTTPS is a JavaScript variable"
    ]
},

{
    question: "What is XSS in web security?",
    answer: "XSS (Cross-Site Scripting) is a vulnerability where attackers inject malicious scripts into webpages viewed by other users.",
    explanation: "Proper input validation, output encoding, and security controls help prevent XSS attacks.",
    example: `<script>alert("XSS")</script>`,
    options: [
        "XSS (Cross-Site Scripting) is a vulnerability where attackers inject malicious scripts into webpages viewed by other users.",
        "XSS is a CSS layout technique",
        "XSS is a database storage method",
        "XSS is an HTML formatting tag"
    ]
},

{
    question: "What is SQL injection?",
    answer: "SQL injection is a security vulnerability where malicious SQL code is inserted into application inputs.",
    explanation: "Parameterized queries and proper input handling help protect applications from SQL injection.",
    example: `SELECT * FROM users WHERE name = ?;`,
    options: [
        "SQL injection is a security vulnerability where malicious SQL code is inserted into application inputs.",
        "SQL injection is a CSS animation",
        "SQL injection is an HTML image technique",
        "SQL injection is a JavaScript layout method"
    ]
},
{
    question: "What is input sanitization?",
    answer: "Input sanitization is the process of cleaning user input to remove or neutralize potentially harmful content.",
    explanation: "It helps reduce security risks caused by unexpected or malicious input.",
    example: `const cleanInput = input.trim();`,
    options: [
        "Input sanitization is the process of cleaning user input to remove or neutralize potentially harmful content.",
        "Input sanitization is used only to change webpage colors",
        "Input sanitization creates HTML headings",
        "Input sanitization is used only for database backups"
    ]
},

{
    question: "What is authentication in web applications?",
    answer: "Authentication is the process of verifying the identity of a user.",
    explanation: "Login systems commonly use usernames, passwords, or other credentials to verify users.",
    example: `if (username && password) {
    loginUser();
}`,
    options: [
        "Authentication is the process of verifying the identity of a user.",
        "Authentication is the process of changing CSS styles",
        "Authentication is used only to resize images",
        "Authentication creates HTML tables"
    ]
},

{
    question: "What is authorization in web applications?",
    answer: "Authorization determines what an authenticated user is allowed to access or perform.",
    explanation: "For example, an administrator may have access to features that regular users cannot access.",
    example: `if (user.role === "admin") {
    showAdminPanel();
}`,
    options: [
        "Authorization determines what an authenticated user is allowed to access or perform.",
        "Authorization verifies only the webpage color",
        "Authorization creates JavaScript variables",
        "Authorization is used only for image compression"
    ]
},

{
    question: "What is a web server?",
    answer: "A web server is a system that receives requests from clients and delivers web resources such as HTML pages.",
    explanation: "Web servers respond to browser requests and can also run server-side applications.",
    example: `GET /index.html`,
    options: [
        "A web server is a system that receives requests from clients and delivers web resources such as HTML pages.",
        "A web server is only a CSS editor",
        "A web server is an image file",
        "A web server is a JavaScript variable"
    ]
},

{
    question: "What is a client in web development?",
    answer: "A client is a device or application, such as a web browser, that requests resources from a server.",
    explanation: "The browser acts as the client when it requests webpages or data from a server.",
    example: `Browser → Request → Server`,
    options: [
        "A client is a device or application, such as a web browser, that requests resources from a server.",
        "A client is only a CSS property",
        "A client is a database table",
        "A client is an HTML attribute"
    ]
},

{
    question: "What is HTTP?",
    answer: "HTTP is a protocol used for communication between web clients and servers.",
    explanation: "It defines how requests and responses are exchanged on the web.",
    example: `GET /index.html HTTP/1.1`,
    options: [
        "HTTP is a protocol used for communication between web clients and servers.",
        "HTTP is a programming language",
        "HTTP is a CSS framework",
        "HTTP is an image compression format"
    ]
},

{
    question: "What is a URL?",
    answer: "A URL (Uniform Resource Locator) is the address used to locate a resource on the web.",
    explanation: "A URL can identify webpages, files, APIs, and other internet resources.",
    example: `https://example.com/index.html`,
    options: [
        "A URL (Uniform Resource Locator) is the address used to locate a resource on the web.",
        "A URL is a CSS selector",
        "A URL is a JavaScript function",
        "A URL is a database command"
    ]
},

{
    question: "What is a domain name?",
    answer: "A domain name is a human-readable name used to identify a website on the internet.",
    explanation: "It provides an easier way for users to access websites instead of remembering an IP address.",
    example: `example.com`,
    options: [
        "A domain name is a human-readable name used to identify a website on the internet.",
        "A domain name is a CSS property",
        "A domain name is an HTML tag",
        "A domain name is a JavaScript operator"
    ]
},

{
    question: "What is an IP address?",
    answer: "An IP address is a numerical or hexadecimal address used to identify a device on a network.",
    explanation: "It allows devices to communicate with each other over a network.",
    example: `192.168.1.10`,
    options: [
        "An IP address is a numerical or hexadecimal address used to identify a device on a network.",
        "An IP address is a CSS class",
        "An IP address is an HTML element",
        "An IP address is a browser cookie"
    ]
},

{
    question: "What is a browser?",
    answer: "A browser is software used to access and display websites and web applications.",
    explanation: "Browsers interpret HTML, CSS, and JavaScript to display interactive webpages.",
    example: `Google Chrome`,
    options: [
        "A browser is software used to access and display websites and web applications.",
        "A browser is a database server",
        "A browser is a CSS property",
        "A browser is an HTML attribute"
    ]
},

{
    question: "What is web accessibility?",
    answer: "Web accessibility means designing websites so that people with different abilities can use them.",
    explanation: "Accessible websites use features such as semantic HTML, keyboard navigation, and alternative text for images.",
    example: `<img src="logo.png" alt="Skill Sense logo">`,
    options: [
        "Web accessibility means designing websites so that people with different abilities can use them.",
        "Web accessibility means designing websites only for mobile phones",
        "Web accessibility is a database technique",
        "Web accessibility is used only for CSS animations"
    ]
},

{
    question: "What is semantic HTML?",
    answer: "Semantic HTML uses meaningful HTML elements that describe the purpose of their content.",
    explanation: "Elements such as header, nav, main, section, article, and footer improve structure and accessibility.",
    example: `<header>
    <h1>Skill Sense</h1>
</header>`,
    options: [
        "Semantic HTML uses meaningful HTML elements that describe the purpose of their content.",
        "Semantic HTML uses only CSS classes",
        "Semantic HTML is a JavaScript framework",
        "Semantic HTML is used only for database connections"
    ]
},

{
    question: "What is browser caching?",
    answer: "Browser caching stores copies of web resources locally so they can be loaded faster on future visits.",
    explanation: "Caching can improve webpage loading performance and reduce repeated network requests.",
    example: `Cache-Control: max-age=3600`,
    options: [
        "Browser caching stores copies of web resources locally so they can be loaded faster on future visits.",
        "Browser caching deletes all webpage files",
        "Browser caching is used only to change CSS colors",
        "Browser caching creates database tables"
    ]
},

{
    question: "What is a favicon?",
    answer: "A favicon is a small icon associated with a website or webpage.",
    explanation: "It is commonly displayed in the browser tab, bookmarks, and browser history.",
    example: `<link rel="icon" href="favicon.ico">`,
    options: [
        "A favicon is a small icon associated with a website or webpage.",
        "A favicon is a database table",
        "A favicon is a JavaScript function",
        "A favicon is a CSS layout system"
    ]
},

{
    question: "What is web hosting?",
    answer: "Web hosting is a service that provides storage and access for websites on a server connected to the internet.",
    explanation: "Hosting makes a website available for users to access through its domain or URL.",
    example: `https://example.com`,
    options: [
        "Web hosting is a service that provides storage and access for websites on a server connected to the internet.",
        "Web hosting is only a CSS technique",
        "Web hosting is an HTML tag",
        "Web hosting is a JavaScript operator"
    ]
}
   ],
   "Database": [

    {
        question: "What is a database?",
        answer: "A database is an organized collection of data that can be stored, managed, and retrieved efficiently.",
        explanation: "It stores related information in a structured way.",
        example: "A college database can store student names, IDs, courses, and marks.",
        options: [
            "A database is an organized collection of data that can be stored, managed, and retrieved efficiently.",
            "A program used only to design web pages.",
            "A device used to connect computers to the internet.",
            "A programming language used to create applications."
        ]
    },

    {
        question: "What is a DBMS?",
        answer: "DBMS stands for Database Management System. It is software used to create, manage, and access databases.",
        explanation: "A DBMS helps users store, update, and retrieve data.",
        example: "MySQL is a popular DBMS.",
        options: [
            "A programming language for developing mobile applications.",
            "DBMS stands for Database Management System. It is software used to create, manage, and access databases.",
            "A hardware device used for data storage.",
            "A system used only for creating websites."
        ]
    },

    {
        question: "What is the difference between data and information?",
        answer: "Data is raw facts, while information is processed data that has meaning.",
        explanation: "Data becomes useful when it is organized and interpreted.",
        example: "85 is data; Student scored 85 marks is information.",
        options: [
            "Data is always processed, while information is always raw.",
            "Data and information are exactly the same.",
            "Data is raw facts, while information is processed data that has meaning.",
            "Information is hardware, while data is software."
        ]
    },

    {
        question: "What are the advantages of using a database?",
        answer: "Databases provide organized storage, easy data retrieval, security, consistency, and reduced duplication.",
        explanation: "They make managing large amounts of data easier.",
        example: "A bank can manage millions of customer records efficiently.",
        options: [
            "Databases provide organized storage, easy data retrieval, security, consistency, and reduced duplication.",
            "Databases are used only to create animations.",
            "Databases increase unnecessary data duplication.",
            "Databases cannot store large amounts of data."
        ]
    },

    {
        question: "What is a relational database?",
        answer: "A relational database stores data in tables containing rows and columns.",
        explanation: "Related tables can be connected using keys.",
        example: "MySQL and PostgreSQL are relational database systems.",
        options: [
            "A database that stores data only as images.",
            "A database that cannot use tables.",
            "A relational database stores data in tables containing rows and columns.",
            "A database used only for computer networking."
        ]
    },

    {
        question: "What is a table in a database?",
        answer: "A table is a structured collection of related data arranged in rows and columns.",
        explanation: "Tables are used to store specific types of information.",
        example: "A Students table can store student details.",
        options: [
            "A table is a structured collection of related data arranged in rows and columns.",
            "A table is a programming language.",
            "A table is a network cable.",
            "A table stores only database passwords."
        ]
    },

    {
        question: "What is a row in a database table?",
        answer: "A row represents a single record in a table.",
        explanation: "Each row contains information about one entity.",
        example: "One row in Students may represent one student.",
        options: [
            "A row represents a database server.",
            "A row represents a single record in a table.",
            "A row represents only a column name.",
            "A row is used to create SQL commands."
        ]
    },

    {
        question: "What is a column in a database table?",
        answer: "A column represents a specific attribute of the data.",
        explanation: "It defines what type of information is stored.",
        example: "Name, Age, and Email can be columns.",
        options: [
            "A column represents a specific attribute of the data.",
            "A column represents an entire database server.",
            "A column is always a complete record.",
            "A column is used only for deleting data."
        ]
    },

    {
        question: "What is a record?",
        answer: "A record is a complete set of related data stored in a row.",
        explanation: "A record usually describes one entity.",
        example: "A student's ID, name, and email together form a record.",
        options: [
            "A record is a database application.",
            "A record is a complete set of related data stored in a row.",
            "A record is a type of SQL operator.",
            "A record is a database password."
        ]
    },

    {
        question: "What is a database schema?",
        answer: "A database schema is the logical structure or design of a database.",
        explanation: "It defines tables, columns, relationships, and constraints.",
        example: "A schema may define Students, Courses, and Marks tables.",
        options: [
            "A database schema is the logical structure or design of a database.",
            "A schema is a physical keyboard layout.",
            "A schema is used only to store images.",
            "A schema is a programming language."
        ]
    },

    {
        question: "What is SQL?",
        answer: "SQL stands for Structured Query Language and is used to interact with relational databases.",
        explanation: "SQL allows users to create, retrieve, update, and delete data.",
        example: "SELECT * FROM Students;",
        options: [
            "SQL stands for Structured Query Language and is used to interact with relational databases.",
            "SQL is a computer hardware component.",
            "SQL is an image editing software.",
            "SQL is a web browser."
        ]
    },

    {
        question: "What is MySQL?",
        answer: "MySQL is a popular open-source relational database management system that uses SQL.",
        explanation: "It is used to store and manage structured data.",
        example: "A website can use MySQL to store user accounts.",
        options: [
            "MySQL is a popular open-source relational database management system that uses SQL.",
            "MySQL is a programming language used for graphics.",
            "MySQL is an operating system.",
            "MySQL is a web browser."
        ]
    },

    {
        question: "What is PostgreSQL?",
        answer: "PostgreSQL is an open-source relational database management system known for advanced features and reliability.",
        explanation: "It supports complex queries and data types.",
        example: "A large application can use PostgreSQL for its backend database.",
        options: [
            "PostgreSQL is a web development framework.",
            "PostgreSQL is an operating system.",
            "PostgreSQL is an open-source relational database management system known for advanced features and reliability.",
            "PostgreSQL is a programming editor."
        ]
    },

    {
        question: "What is a database server?",
        answer: "A database server is a system that stores and manages databases and processes database requests.",
        explanation: "It receives requests from applications and returns data.",
        example: "A web application may send SQL queries to a database server.",
        options: [
            "A database server is a system that stores and manages databases and processes database requests.",
            "A device used only to display web pages.",
            "A programming language used to write SQL.",
            "A tool used only for image storage."
        ]
    },

    {
        question: "What is data redundancy?",
        answer: "Data redundancy means storing the same data unnecessarily in multiple places.",
        explanation: "Repeated data can waste storage and cause inconsistencies.",
        example: "Storing the same customer address in several tables unnecessarily.",
        options: [
            "Data redundancy means storing the same data unnecessarily in multiple places.",
            "Data redundancy means deleting all database records.",
            "Data redundancy means encrypting every database value.",
            "Data redundancy means creating a new database server."
        ]
    },
    {
    question: "What is data consistency?",
    answer: "Data consistency means data remains accurate and uniform across the database.",
    explanation: "The same information should not have conflicting values.",
    example: "A customer's phone number should be consistent wherever it is stored.",
    options: [
        "Data consistency means data remains accurate and uniform across the database.",
        "Data consistency means deleting duplicate tables.",
        "Data consistency means storing data without any rules.",
        "Data consistency means converting data into images."
    ]
},

{
    question: "What is data integrity?",
    answer: "Data integrity ensures that data remains accurate, valid, and reliable.",
    explanation: "Database rules prevent invalid data from being stored.",
    example: "A student ID should not be duplicated when it must be unique.",
    options: [
        "Data integrity means data is stored only as text.",
        "Data integrity ensures that data remains accurate, valid, and reliable.",
        "Data integrity means removing all database constraints.",
        "Data integrity means creating multiple copies of every record."
    ]
},

{
    question: "What is a database administrator?",
    answer: "A database administrator (DBA) manages, secures, monitors, and maintains databases.",
    explanation: "The DBA ensures the database works correctly and securely.",
    example: "A DBA may create user permissions and perform backups.",
    options: [
        "A database administrator (DBA) manages, secures, monitors, and maintains databases.",
        "A DBA designs only website graphics.",
        "A DBA creates computer hardware.",
        "A DBA is a programming language."
    ]
},

{
    question: "What is a database model?",
    answer: "A database model defines how data is organized, stored, and related.",
    explanation: "It provides a structure for designing databases.",
    example: "Relational, hierarchical, and network models are database models.",
    options: [
        "A database model defines how data is organized, stored, and related.",
        "A database model is used only to create passwords.",
        "A database model is a type of computer network.",
        "A database model is an image format."
    ]
},

{
    question: "What is an entity in a database?",
    answer: "An entity is a real-world object or concept about which data is stored.",
    explanation: "Entities become important objects in database design.",
    example: "Student, Employee, and Product can be entities.",
    options: [
        "An entity is a real-world object or concept about which data is stored.",
        "An entity is a database query.",
        "An entity is a type of SQL operator.",
        "An entity is a computer hardware device."
    ]
},

{
    question: "What is the purpose of the SELECT statement?",
    answer: "The SELECT statement retrieves data from one or more tables.",
    explanation: "It is used to read information from a database.",
    example: "SELECT name FROM Students;",
    options: [
        "The SELECT statement deletes records from a table.",
        "The SELECT statement retrieves data from one or more tables.",
        "The SELECT statement creates a new database server.",
        "The SELECT statement changes the table structure."
    ]
},

{
    question: "What is the purpose of the INSERT statement?",
    answer: "INSERT is used to add new records to a table.",
    explanation: "It adds new data to the database.",
    example: "INSERT INTO Students VALUES (1, 'John');",
    options: [
        "INSERT is used to add new records to a table.",
        "INSERT is used to delete a database.",
        "INSERT is used only to sort records.",
        "INSERT is used to remove columns."
    ]
},

{
    question: "What is the purpose of the UPDATE statement?",
    answer: "UPDATE is used to modify existing records.",
    explanation: "It changes data that is already stored.",
    example: "UPDATE Students SET name='David' WHERE id=1;",
    options: [
        "UPDATE is used to create a new database.",
        "UPDATE is used to modify existing records.",
        "UPDATE is used to permanently delete a table.",
        "UPDATE is used only to retrieve records."
    ]
},

{
    question: "What is the purpose of the DELETE statement?",
    answer: "DELETE removes existing records from a table.",
    explanation: "It permanently removes selected rows.",
    example: "DELETE FROM Students WHERE id=5;",
    options: [
        "DELETE removes existing records from a table.",
        "DELETE creates a new table.",
        "DELETE retrieves records from a database.",
        "DELETE changes only the column name."
    ]
},

{
    question: "What is the CREATE TABLE statement?",
    answer: "CREATE TABLE is used to create a new database table.",
    explanation: "It defines columns and their data types.",
    example: "CREATE TABLE Students (id INT, name VARCHAR(50));",
    options: [
        "CREATE TABLE is used to delete an existing table.",
        "CREATE TABLE is used to create a new database table.",
        "CREATE TABLE is used only to retrieve data.",
        "CREATE TABLE is used to sort records."
    ]
},

{
    question: "What is the ALTER TABLE statement?",
    answer: "ALTER TABLE is used to modify the structure of an existing table.",
    explanation: "It can add, modify, or remove columns.",
    example: "ALTER TABLE Students ADD email VARCHAR(100);",
    options: [
        "ALTER TABLE is used to modify the structure of an existing table.",
        "ALTER TABLE is used to create a web page.",
        "ALTER TABLE is used only to retrieve records.",
        "ALTER TABLE is used to delete the entire database."
    ]
},

{
    question: "What is the DROP TABLE statement?",
    answer: "DROP TABLE permanently removes a table and its data.",
    explanation: "Both the table structure and stored records are deleted.",
    example: "DROP TABLE Students;",
    options: [
        "DROP TABLE permanently removes a table and its data.",
        "DROP TABLE adds new records to a table.",
        "DROP TABLE sorts records alphabetically.",
        "DROP TABLE displays selected records."
    ]
},

{
    question: "What is the WHERE clause?",
    answer: "WHERE filters records based on a specified condition.",
    explanation: "It selects only records that match the condition.",
    example: "SELECT * FROM Students WHERE age > 18;",
    options: [
        "WHERE filters records based on a specified condition.",
        "WHERE creates a new database.",
        "WHERE permanently deletes the table structure.",
        "WHERE changes the database server."
    ]
},

{
    question: "What is the ORDER BY clause?",
    answer: "ORDER BY sorts query results in ascending or descending order.",
    explanation: "It organizes the output based on a column.",
    example: "SELECT * FROM Students ORDER BY name ASC;",
    options: [
        "ORDER BY sorts query results in ascending or descending order.",
        "ORDER BY creates a new table.",
        "ORDER BY removes duplicate databases.",
        "ORDER BY inserts new records."
    ]
},

{
    question: "What is the DISTINCT keyword?",
    answer: "DISTINCT removes duplicate values from query results.",
    explanation: "It displays only unique values.",
    example: "SELECT DISTINCT city FROM Students;",
    options: [
        "DISTINCT removes duplicate values from query results.",
        "DISTINCT creates duplicate records.",
        "DISTINCT deletes the entire table.",
        "DISTINCT changes column data types."
    ]
},
{
    question: "What is the LIKE operator?",
    answer: "LIKE is used to search for a specified pattern in text values.",
    explanation: "It helps find partially matching strings.",
    example: "SELECT * FROM Students WHERE name LIKE 'A%';",
    options: [
        "LIKE is used to delete matching records.",
        "LIKE is used to search for a specified pattern in text values.",
        "LIKE is used to create a database table.",
        "LIKE is used to sort numeric values only."
    ]
},

{
    question: "What does the % wildcard represent in SQL?",
    answer: "% represents zero or more characters in a pattern.",
    explanation: "It is commonly used with LIKE.",
    example: "LIKE 'A%' finds names beginning with A.",
    options: [
        "% represents exactly one character.",
        "% represents zero or more characters in a pattern.",
        "% represents only numbers.",
        "% represents a database table."
    ]
},

{
    question: "What does the _ wildcard represent in SQL?",
    answer: "_ represents exactly one character in a pattern.",
    explanation: "It helps match a specific character position.",
    example: "LIKE 'J_hn' can match John.",
    options: [
        "_ represents exactly one character in a pattern.",
        "_ represents zero or more characters.",
        "_ represents an entire row.",
        "_ represents a database."
    ]
},

{
    question: "What is the IN operator?",
    answer: "IN checks whether a value matches any value in a specified list.",
    explanation: "It avoids writing multiple OR conditions.",
    example: "WHERE city IN ('Chennai','Madurai');",
    options: [
        "IN checks whether a value matches any value in a specified list.",
        "IN deletes values from a table.",
        "IN creates a new database.",
        "IN sorts all records automatically."
    ]
},

{
    question: "What is the BETWEEN operator?",
    answer: "BETWEEN selects values within a specified range.",
    explanation: "It is useful for numbers, dates, and other ordered values.",
    example: "WHERE age BETWEEN 18 AND 25;",
    options: [
        "BETWEEN selects values within a specified range.",
        "BETWEEN removes duplicate records.",
        "BETWEEN creates a foreign key.",
        "BETWEEN changes the table structure."
    ]
},

{
    question: "What is the AND operator in SQL?",
    answer: "AND returns records only when all specified conditions are true.",
    explanation: "It combines multiple conditions.",
    example: "WHERE age > 18 AND city = 'Chennai';",
    options: [
        "AND returns records only when all specified conditions are true.",
        "AND returns records when every condition is false.",
        "AND deletes records from two tables.",
        "AND creates a new database."
    ]
},

{
    question: "What is the OR operator in SQL?",
    answer: "OR returns records when at least one specified condition is true.",
    explanation: "It allows alternative conditions.",
    example: "WHERE city='Chennai' OR city='Madurai';",
    options: [
        "OR returns records when at least one specified condition is true.",
        "OR returns records only when all conditions are false.",
        "OR deletes duplicate tables.",
        "OR creates a database schema."
    ]
},

{
    question: "What is the NOT operator?",
    answer: "NOT reverses a condition in an SQL query.",
    explanation: "It selects records that do not match the condition.",
    example: "WHERE NOT city='Chennai';",
    options: [
        "NOT reverses a condition in an SQL query.",
        "NOT creates a new table.",
        "NOT adds records to a database.",
        "NOT sorts query results."
    ]
},

{
    question: "What is NULL in SQL?",
    answer: "NULL represents a missing, unknown, or unavailable value.",
    explanation: "NULL is different from zero or an empty string.",
    example: "A student may have a NULL value for an optional phone number.",
    options: [
        "NULL represents zero only.",
        "NULL represents a missing, unknown, or unavailable value.",
        "NULL represents an empty database.",
        "NULL represents a duplicate record."
    ]
},

{
    question: "How do you check for NULL values?",
    answer: "Use IS NULL or IS NOT NULL.",
    explanation: "Normal comparison operators should not be used to check NULL.",
    example: "SELECT * FROM Students WHERE email IS NULL;",
    options: [
        "Use = NULL only.",
        "Use IS NULL or IS NOT NULL.",
        "Use LIKE NULL only.",
        "Use ORDER BY NULL."
    ]
},

{
    question: "What is an alias in SQL?",
    answer: "An alias is a temporary name given to a table or column in a query.",
    explanation: "It makes query output or queries easier to read.",
    example: "SELECT name AS StudentName FROM Students;",
    options: [
        "An alias is a permanent database table.",
        "An alias is a temporary name given to a table or column in a query.",
        "An alias is a database password.",
        "An alias is a type of foreign key."
    ]
},

{
    question: "What is the LIMIT clause?",
    answer: "LIMIT restricts the number of rows returned by a query in systems that support it.",
    explanation: "It is useful when only a small number of results are needed.",
    example: "SELECT * FROM Students LIMIT 5;",
    options: [
        "LIMIT restricts the number of rows returned by a query in systems that support it.",
        "LIMIT deletes all rows from a table.",
        "LIMIT creates a new database.",
        "LIMIT changes the primary key."
    ]
},

{
    question: "What is the difference between DELETE and DROP?",
    answer: "DELETE removes records, while DROP removes the entire database object.",
    explanation: "DELETE can remove selected rows; DROP removes the table itself.",
    example: "DELETE FROM Students; removes rows, while DROP TABLE Students; removes the table.",
    options: [
        "DELETE removes records, while DROP removes the entire database object.",
        "DELETE and DROP always perform exactly the same operation.",
        "DROP only sorts records.",
        "DELETE creates a new table."
    ]
},

{
    question: "What is the difference between DELETE and TRUNCATE?",
    answer: "DELETE removes rows and can use conditions, while TRUNCATE removes all rows quickly.",
    explanation: "TRUNCATE is generally used when all table data must be cleared.",
    example: "TRUNCATE TABLE Students;",
    options: [
        "DELETE removes rows and can use conditions, while TRUNCATE removes all rows quickly.",
        "DELETE removes the table structure, while TRUNCATE creates a table.",
        "DELETE and TRUNCATE are used only for sorting data.",
        "TRUNCATE adds new records to a table."
    ]
},

{
    question: "What is the purpose of comments in SQL?",
    answer: "SQL comments are used to add explanations or notes to SQL code.",
    explanation: "Comments help developers understand queries.",
    example: "-- Retrieve all students",
    options: [
        "SQL comments are used to add explanations or notes to SQL code.",
        "SQL comments execute database commands automatically.",
        "SQL comments delete database records.",
        "SQL comments create database tables."
    ]
},
{
    question: "What is a primary key?",
    answer: "A primary key uniquely identifies each record in a table.",
    explanation: "It cannot contain duplicate values.",
    example: "student_id can be a primary key.",
    options: [
        "A primary key uniquely identifies each record in a table.",
        "A primary key stores only duplicate values.",
        "A primary key is used only to sort records.",
        "A primary key is a type of database server."
    ]
},

{
    question: "What is a foreign key?",
    answer: "A foreign key is a column that references a key in another table.",
    explanation: "It creates a relationship between tables.",
    example: "course_id in Students can reference Courses.",
    options: [
        "A foreign key is a column that references a key in another table.",
        "A foreign key can only store images.",
        "A foreign key removes all table relationships.",
        "A foreign key is used only for sorting data."
    ]
},

{
    question: "What is a candidate key?",
    answer: "A candidate key is a column or combination of columns that can uniquely identify records.",
    explanation: "One candidate key is selected as the primary key.",
    example: "Student ID and email may both uniquely identify a student.",
    options: [
        "A candidate key is a column or combination of columns that can uniquely identify records.",
        "A candidate key always contains duplicate values.",
        "A candidate key is used only for deleting records.",
        "A candidate key is a database backup."
    ]
},

{
    question: "What is a composite key?",
    answer: "A composite key is a key made from two or more columns.",
    explanation: "Multiple columns together uniquely identify a record.",
    example: "student_id + course_id can form a composite key.",
    options: [
        "A composite key is a key made from two or more columns.",
        "A composite key contains only one column.",
        "A composite key is used only to store passwords.",
        "A composite key is a type of SQL query."
    ]
},

{
    question: "What is a unique key?",
    answer: "A UNIQUE constraint ensures that values in a column are not duplicated.",
    explanation: "It prevents duplicate values.",
    example: "Email addresses can be made UNIQUE.",
    options: [
        "A UNIQUE constraint ensures that values in a column are not duplicated.",
        "A UNIQUE constraint allows unlimited duplicate values.",
        "A UNIQUE constraint deletes all records.",
        "A UNIQUE constraint creates a new database."
    ]
},

{
    question: "What is the NOT NULL constraint?",
    answer: "NOT NULL prevents a column from storing NULL values.",
    explanation: "It makes the field mandatory.",
    example: "A student name can be defined as NOT NULL.",
    options: [
        "NOT NULL prevents a column from storing NULL values.",
        "NOT NULL allows only duplicate values.",
        "NOT NULL deletes the entire table.",
        "NOT NULL is used only for sorting records."
    ]
},

{
    question: "What is the DEFAULT constraint?",
    answer: "DEFAULT provides an automatic value when no value is supplied.",
    explanation: "It avoids leaving certain fields empty.",
    example: "status VARCHAR(20) DEFAULT 'Active'.",
    options: [
        "DEFAULT provides an automatic value when no value is supplied.",
        "DEFAULT removes all values from a column.",
        "DEFAULT creates a foreign key automatically.",
        "DEFAULT is used only to delete records."
    ]
},

{
    question: "What is the CHECK constraint?",
    answer: "CHECK ensures that column values satisfy a specified condition.",
    explanation: "It prevents invalid values.",
    example: "CHECK (age >= 18).",
    options: [
        "CHECK ensures that column values satisfy a specified condition.",
        "CHECK deletes records that contain numbers.",
        "CHECK creates a new database server.",
        "CHECK removes all table constraints."
    ]
},

{
    question: "What is referential integrity?",
    answer: "Referential integrity ensures that foreign key values correctly reference existing records.",
    explanation: "It prevents invalid relationships between tables.",
    example: "A course ID in Enrollments must exist in Courses.",
    options: [
        "Referential integrity ensures that foreign key values correctly reference existing records.",
        "Referential integrity removes all foreign keys.",
        "Referential integrity allows invalid table relationships.",
        "Referential integrity is used only for database backups."
    ]
},

{
    question: "What is a relationship in a database?",
    answer: "A relationship describes how records in different tables are connected.",
    explanation: "Relationships help organize related data.",
    example: "Students can be related to Courses.",
    options: [
        "A relationship describes how records in different tables are connected.",
        "A relationship is a database password.",
        "A relationship is used only to delete tables.",
        "A relationship is a programming language."
    ]
},

{
    question: "What is a one-to-one relationship?",
    answer: "A one-to-one relationship means one record in one table is related to one record in another table.",
    explanation: "Each entity has at most one related entity.",
    example: "One person may have one passport record.",
    options: [
        "A one-to-one relationship means one record in one table is related to one record in another table.",
        "One record is always related to hundreds of records.",
        "It means no records are related.",
        "It means one table cannot have any columns."
    ]
},

{
    question: "What is a one-to-many relationship?",
    answer: "A one-to-many relationship means one record can be related to many records.",
    explanation: "It is one of the most common database relationships.",
    example: "One department can have many employees.",
    options: [
        "A one-to-many relationship means one record can be related to many records.",
        "Many records can never be related.",
        "One table must contain only one record.",
        "It means two databases cannot be connected."
    ]
},

{
    question: "What is a many-to-many relationship?",
    answer: "A many-to-many relationship means many records in one table can relate to many records in another table.",
    explanation: "It is usually implemented using a junction table.",
    example: "Students can enroll in many courses.",
    options: [
        "A many-to-many relationship means many records in one table can relate to many records in another table.",
        "Only one record can exist in each table.",
        "It means tables cannot have foreign keys.",
        "It means data cannot be related."
    ]
},

{
    question: "What is a junction table?",
    answer: "A junction table connects two tables involved in a many-to-many relationship.",
    explanation: "It stores foreign keys from both related tables.",
    example: "Enrollment(student_id, course_id).",
    options: [
        "A junction table connects two tables involved in a many-to-many relationship.",
        "A junction table stores only database passwords.",
        "A junction table removes relationships between tables.",
        "A junction table is used only for sorting records."
    ]
},

{
    question: "Can a table have more than one candidate key?",
    answer: "Yes, a table can have multiple candidate keys.",
    explanation: "Any candidate key can potentially be selected as the primary key.",
    example: "Student ID and email may both be candidate keys.",
    options: [
        "No, a table can have only one candidate key.",
        "Yes, a table can have multiple candidate keys.",
        "Candidate keys cannot uniquely identify records.",
        "Candidate keys are used only for deleting records."
    ]
},
{
    question: "Can a table have multiple foreign keys?",
    answer: "Yes, a table can contain multiple foreign keys.",
    explanation: "Each foreign key can reference a different table.",
    example: "An Orders table may reference Customers and Products.",
    options: [
        "Yes, a table can contain multiple foreign keys.",
        "No, a table can contain only one foreign key.",
        "Foreign keys cannot reference other tables.",
        "Foreign keys are used only for sorting data."
    ]
},

{
    question: "Can a primary key contain NULL values?",
    answer: "No, a primary key cannot contain NULL values.",
    explanation: "Every record must have a valid unique identifier.",
    example: "student_id must always have a value.",
    options: [
        "Yes, a primary key can contain unlimited NULL values.",
        "No, a primary key cannot contain NULL values.",
        "A primary key can contain NULL only in the first row.",
        "NULL values are required in every primary key."
    ]
},

{
    question: "What is entity integrity?",
    answer: "Entity integrity ensures that every record has a valid and unique primary key.",
    explanation: "It prevents unidentified or duplicate records.",
    example: "Two students cannot have the same primary key.",
    options: [
        "Entity integrity ensures that every record has a valid and unique primary key.",
        "Entity integrity allows duplicate primary keys.",
        "Entity integrity removes all primary keys.",
        "Entity integrity is used only for database backups."
    ]
},

{
    question: "What happens when a foreign key references a non-existing record?",
    answer: "The database generally rejects the operation when referential integrity is enforced.",
    explanation: "This prevents invalid relationships.",
    example: "An invalid customer_id cannot be inserted into an Orders table.",
    options: [
        "The database generally rejects the operation when referential integrity is enforced.",
        "The database always creates the missing record automatically.",
        "The database deletes the entire table.",
        "The database ignores the foreign key."
    ]
},

{
    question: "Why are constraints important in databases?",
    answer: "Constraints enforce rules that keep data accurate, valid, and consistent.",
    explanation: "They prevent common data-entry errors.",
    example: "NOT NULL can prevent a required student name from being empty.",
    options: [
        "Constraints enforce rules that keep data accurate, valid, and consistent.",
        "Constraints are used only to make websites colorful.",
        "Constraints allow invalid data to be stored.",
        "Constraints remove all database relationships."
    ]
},

{
    question: "What is a JOIN in SQL?",
    answer: "A JOIN combines related data from two or more tables.",
    explanation: "It retrieves information stored across multiple tables.",
    example: "Joining Students with Courses using course_id.",
    options: [
        "A JOIN combines related data from two or more tables.",
        "A JOIN deletes two or more tables.",
        "A JOIN creates a new programming language.",
        "A JOIN is used only to rename columns."
    ]
},

{
    question: "What is an INNER JOIN?",
    answer: "INNER JOIN returns only records that have matching values in both tables.",
    explanation: "Non-matching records are excluded.",
    example: "Students with valid course records can be retrieved using INNER JOIN.",
    options: [
        "INNER JOIN returns only records that have matching values in both tables.",
        "INNER JOIN returns all records from the left table only.",
        "INNER JOIN deletes non-matching records permanently.",
        "INNER JOIN creates a new database."
    ]
},

{
    question: "What is a LEFT JOIN?",
    answer: "LEFT JOIN returns all records from the left table and matching records from the right table.",
    explanation: "Unmatched right-side values become NULL.",
    example: "Display all students even if they have no course.",
    options: [
        "LEFT JOIN returns all records from the left table and matching records from the right table.",
        "LEFT JOIN returns only matching records from both tables.",
        "LEFT JOIN returns only records from the right table.",
        "LEFT JOIN deletes unmatched records."
    ]
},

{
    question: "What is a RIGHT JOIN?",
    answer: "RIGHT JOIN returns all records from the right table and matching records from the left table.",
    explanation: "Unmatched left-side values become NULL.",
    example: "Display all courses even if no student has enrolled.",
    options: [
        "RIGHT JOIN returns all records from the right table and matching records from the left table.",
        "RIGHT JOIN returns only records from the left table.",
        "RIGHT JOIN deletes unmatched records.",
        "RIGHT JOIN returns only duplicate records."
    ]
},

{
    question: "What is a FULL OUTER JOIN?",
    answer: "FULL OUTER JOIN returns matching and non-matching records from both tables.",
    explanation: "It combines the results of left and right joins.",
    example: "Show all students and all courses, including unmatched records.",
    options: [
        "FULL OUTER JOIN returns matching and non-matching records from both tables.",
        "FULL OUTER JOIN returns only matching records.",
        "FULL OUTER JOIN returns records from only the left table.",
        "FULL OUTER JOIN deletes unmatched records."
    ]
},

{
    question: "What is a self join?",
    answer: "A self join joins a table with itself.",
    explanation: "It is useful when records in the same table are related.",
    example: "An Employee table can be joined to itself to show managers and employees.",
    options: [
        "A self join joins a table with itself.",
        "A self join joins only two different databases.",
        "A self join deletes a table and creates another one.",
        "A self join is used only to sort records."
    ]
},

{
    question: "What is a CROSS JOIN?",
    answer: "CROSS JOIN produces every possible combination of rows from two tables.",
    explanation: "Each row from one table is paired with every row from the other.",
    example: "Combining every product with every available color.",
    options: [
        "CROSS JOIN produces every possible combination of rows from two tables.",
        "CROSS JOIN returns only matching rows.",
        "CROSS JOIN deletes duplicate rows.",
        "CROSS JOIN creates only one row."
    ]
},

{
    question: "What is the COUNT() function?",
    answer: "COUNT() returns the number of rows or non-NULL values.",
    explanation: "It is used to count records.",
    example: "SELECT COUNT(*) FROM Students;",
    options: [
        "COUNT() returns the number of rows or non-NULL values.",
        "COUNT() calculates the average of values.",
        "COUNT() returns the highest value.",
        "COUNT() deletes records from a table."
    ]
},

{
    question: "What is the SUM() function?",
    answer: "SUM() calculates the total of numeric values.",
    explanation: "It adds values in a selected column.",
    example: "SELECT SUM(salary) FROM Employees;",
    options: [
        "SUM() calculates the total of numeric values.",
        "SUM() returns the lowest value.",
        "SUM() counts only table names.",
        "SUM() removes duplicate records."
    ]
},

{
    question: "What is the AVG() function?",
    answer: "AVG() calculates the average of numeric values.",
    explanation: "It returns the mean value.",
    example: "SELECT AVG(mark) FROM Students;",
    options: [
        "AVG() calculates the average of numeric values.",
        "AVG() returns only the highest value.",
        "AVG() deletes numeric values.",
        "AVG() creates a new table."
    ]
},

],
"Problem Solving": [
{
    question: "What is problem solving?",
    answer: "Problem solving is the process of identifying a problem and finding an effective solution.",
    explanation: "It involves understanding the problem, planning a solution, implementing it, and checking the result.",
    example: "Finding the shortest route between two locations is a problem-solving task.",
    options: [
        "Problem solving is the process of identifying a problem and finding an effective solution.",
        "Problem solving is the process of writing code without understanding the problem.",
        "Problem solving means only identifying errors in a program.",
        "Problem solving is the process of storing data in a database."
    ]
},

{
    question: "What is problem identification?",
    answer: "Problem identification is the process of clearly recognizing and defining a problem.",
    explanation: "Before solving a problem, you must understand exactly what is wrong.",
    example: "A program produces incorrect output because the input is not validated.",
    options: [
        "Problem identification is the process of clearly recognizing and defining a problem.",
        "Problem identification means implementing the solution immediately.",
        "Problem identification means testing only the final output.",
        "Problem identification is the process of deleting incorrect data."
    ]
},

{
    question: "Why is problem analysis important?",
    answer: "Problem analysis helps understand the causes, requirements, inputs, and expected outputs of a problem.",
    explanation: "Proper analysis reduces mistakes and helps create an appropriate solution.",
    example: "Before developing a student result system, analyze marks, grading rules, and expected results.",
    options: [
        "Problem analysis helps understand the causes, requirements, inputs, and expected outputs of a problem.",
        "Problem analysis is used only to design the user interface.",
        "Problem analysis means skipping the requirements.",
        "Problem analysis is used only after the program is completed."
    ]
},

{
    question: "What is a problem statement?",
    answer: "A problem statement is a clear description of the problem that needs to be solved.",
    explanation: "It explains what needs to be achieved without unnecessary details.",
    example: "\"Develop a program to calculate the average marks of five subjects.\"",
    options: [
        "A problem statement is a clear description of the problem that needs to be solved.",
        "A problem statement is the final output of a program.",
        "A problem statement is a programming language.",
        "A problem statement is a database table."
    ]
},

{
    question: "What are inputs in problem solving?",
    answer: "Inputs are the data provided to a problem-solving process.",
    explanation: "Inputs are the information required to produce the desired result.",
    example: "Student marks are inputs for calculating an average.",
    options: [
        "Inputs are the data provided to a problem-solving process.",
        "Inputs are the final results produced by a program.",
        "Inputs are errors found after testing.",
        "Inputs are only the instructions written in code."
    ]
},

{
    question: "What is an output?",
    answer: "An output is the result produced after processing the input.",
    explanation: "It is the final information generated by the solution.",
    example: "The average mark calculated from five subject marks is an output.",
    options: [
        "An output is the result produced after processing the input.",
        "An output is the data entered by the user.",
        "An output is a condition used in a program.",
        "An output is a programming error."
    ]
},

{
    question: "What is a requirement in problem solving?",
    answer: "A requirement describes what a solution must do or provide.",
    explanation: "Requirements define the expected behavior of the system.",
    example: "A calculator application must support addition, subtraction, multiplication, and division.",
    options: [
        "A requirement describes what a solution must do or provide.",
        "A requirement describes only the color of a webpage.",
        "A requirement is an error found during debugging.",
        "A requirement is a database record."
    ]
},

{
    question: "What is decomposition?",
    answer: "Decomposition is the process of breaking a complex problem into smaller, manageable parts.",
    explanation: "Smaller problems are easier to understand and solve.",
    example: "A shopping system can be divided into login, product search, cart, and payment modules.",
    options: [
        "Decomposition is the process of breaking a complex problem into smaller, manageable parts.",
        "Decomposition means combining all problems into one large problem.",
        "Decomposition means deleting unnecessary program files.",
        "Decomposition is used only for database backup."
    ]
},

{
    question: "What is pattern recognition?",
    answer: "Pattern recognition is identifying similarities or repeated structures in problems or data.",
    explanation: "Recognizing patterns can help find solutions faster.",
    example: "Identifying that numbers 2, 4, 6, 8 follow an even-number pattern.",
    options: [
        "Pattern recognition is identifying similarities or repeated structures in problems or data.",
        "Pattern recognition means randomly changing data.",
        "Pattern recognition means removing repeated information.",
        "Pattern recognition is used only for creating webpages."
    ]
},

{
    question: "What is abstraction in problem solving?",
    answer: "Abstraction focuses on important details while ignoring unnecessary details.",
    explanation: "It makes complex problems easier to understand.",
    example: "A user sees a \"Pay Now\" button without needing to know the internal payment process.",
    options: [
        "Abstraction focuses on important details while ignoring unnecessary details.",
        "Abstraction means showing every internal implementation detail.",
        "Abstraction means deleting all important information.",
        "Abstraction is a method of storing database records."
    ]
},

{
    question: "What is brainstorming?",
    answer: "Brainstorming is a technique for generating multiple possible solutions to a problem.",
    explanation: "Different ideas are collected before selecting the best solution.",
    example: "A team suggests several ways to improve a college attendance system.",
    options: [
        "Brainstorming is a technique for generating multiple possible solutions to a problem.",
        "Brainstorming means selecting the first solution without discussion.",
        "Brainstorming means testing only one possible solution.",
        "Brainstorming is a method of deleting incorrect solutions."
    ]
},

{
    question: "What is trial and error?",
    answer: "Trial and error is a method of testing different solutions until a suitable solution is found.",
    explanation: "Each attempt provides information that helps improve the next attempt.",
    example: "Trying different sorting approaches to determine which works best for a dataset.",
    options: [
        "Trial and error is a method of testing different solutions until a suitable solution is found.",
        "Trial and error means using only one solution without testing.",
        "Trial and error means avoiding all possible solutions.",
        "Trial and error is used only for database design."
    ]
},

{
    question: "What is a constraint?",
    answer: "A constraint is a limitation or condition that a solution must satisfy.",
    explanation: "Constraints define what the solution can or cannot do.",
    example: "A program may need to process one million records within a few seconds.",
    options: [
        "A constraint is a limitation or condition that a solution must satisfy.",
        "A constraint is a final result produced by a program.",
        "A constraint means there are no limitations on a solution.",
        "A constraint is a type of programming language."
    ]
},

{
    question: "What is decision making in problem solving?",
    answer: "Decision making is the process of selecting the most suitable option from available alternatives.",
    explanation: "Good decisions consider requirements, limitations, and expected results.",
    example: "Choosing binary search when the data is already sorted.",
    options: [
        "Decision making is the process of selecting the most suitable option from available alternatives.",
        "Decision making means selecting an option randomly.",
        "Decision making means avoiding all available alternatives.",
        "Decision making is used only after the problem is solved."
    ]
},

{
    question: "Why is logical thinking important in problem solving?",
    answer: "Logical thinking helps organize information and make correct decisions based on rules and conditions.",
    explanation: "It allows problems to be solved systematically.",
    example: "Checking whether a number is positive, negative, or zero using conditions.",
    options: [
        "Logical thinking helps organize information and make correct decisions based on rules and conditions.",
        "Logical thinking means making decisions without rules.",
        "Logical thinking is used only for designing webpages.",
        "Logical thinking means ignoring the problem requirements."
    ]
},
{
    question: "What is a solution strategy?",
    answer: "A solution strategy is a planned approach used to solve a problem.",
    explanation: "It defines the general method before implementation begins.",
    example: "Using divide and conquer to solve a large searching or sorting problem.",
    options: [
        "A solution strategy is a planned approach used to solve a problem.",
        "A solution strategy is the final output of a program.",
        "A solution strategy means solving a problem without planning.",
        "A solution strategy is a type of database."
    ]
},

{
    question: "What is verification?",
    answer: "Verification checks whether a solution was developed correctly according to its requirements.",
    explanation: "It helps identify errors before the solution is finalized.",
    example: "Checking whether a program follows the required input and output format.",
    options: [
        "Verification checks whether a solution was developed correctly according to its requirements.",
        "Verification checks only the color of the application.",
        "Verification means deleting all program errors automatically.",
        "Verification is the process of creating database tables."
    ]
},

{
    question: "What is validation?",
    answer: "Validation checks whether the solution actually solves the intended problem.",
    explanation: "It confirms that the final result meets user needs.",
    example: "Testing whether a student management system produces correct student reports.",
    options: [
        "Validation checks whether the solution actually solves the intended problem.",
        "Validation checks only whether the code has syntax errors.",
        "Validation means creating a new programming language.",
        "Validation is used only for database storage."
    ]
},

{
    question: "What is an edge case?",
    answer: "An edge case is an unusual or extreme input condition that may expose problems in a solution.",
    explanation: "Testing edge cases helps make solutions more reliable.",
    example: "Testing a program with an empty list.",
    options: [
        "An edge case is an unusual or extreme input condition that may expose problems in a solution.",
        "An edge case is always the normal input of a program.",
        "An edge case is the final output of a system.",
        "An edge case is a type of programming language."
    ]
},

{
    question: "What makes a good solution?",
    answer: "A good solution should be correct, efficient, understandable, maintainable, and suitable for the requirements.",
    explanation: "The best solution balances correctness, performance, and simplicity.",
    example: "An algorithm that produces correct results quickly with reasonable memory usage.",
    options: [
        "A good solution should be correct, efficient, understandable, maintainable, and suitable for the requirements.",
        "A good solution should always be complex.",
        "A good solution should ignore system requirements.",
        "A good solution should use maximum memory."
    ]
},

{
    question: "What is logical reasoning?",
    answer: "Logical reasoning is the process of reaching conclusions using facts, rules, and relationships.",
    explanation: "It helps determine what logically follows from given information.",
    example: "If all programmers know programming and Ravi is a programmer, Ravi knows programming.",
    options: [
        "Logical reasoning is the process of reaching conclusions using facts, rules, and relationships.",
        "Logical reasoning means making random decisions.",
        "Logical reasoning means ignoring available facts.",
        "Logical reasoning is used only for storing data."
    ]
},

{
    question: "What is deductive reasoning?",
    answer: "Deductive reasoning derives a specific conclusion from general rules or facts.",
    explanation: "If the premises are true, the conclusion should logically follow.",
    example: "All databases store data. MySQL is a database. Therefore, MySQL stores data.",
    options: [
        "Deductive reasoning derives a specific conclusion from general rules or facts.",
        "Deductive reasoning derives general rules only from random guesses.",
        "Deductive reasoning ignores facts and conditions.",
        "Deductive reasoning is a method of sorting data."
    ]
},

{
    question: "What is inductive reasoning?",
    answer: "Inductive reasoning develops a general conclusion from specific observations.",
    explanation: "It identifies patterns from multiple examples.",
    example: "Observing several successful tests may suggest that an algorithm works correctly.",
    options: [
        "Inductive reasoning develops a general conclusion from specific observations.",
        "Inductive reasoning always starts with a fixed general rule.",
        "Inductive reasoning ignores observations.",
        "Inductive reasoning is used only to create databases."
    ]
},

{
    question: "What is conditional logic?",
    answer: "Conditional logic executes different actions based on whether a condition is true or false.",
    explanation: "It allows programs to make decisions.",
    example: "If marks are 40 or above, display \"Pass\"; otherwise display \"Fail.\"",
    options: [
        "Conditional logic executes different actions based on whether a condition is true or false.",
        "Conditional logic always executes the same action.",
        "Conditional logic ignores conditions.",
        "Conditional logic is used only for database backup."
    ]
},

{
    question: "What is Boolean logic?",
    answer: "Boolean logic works with true and false values using logical operators.",
    explanation: "It is commonly used in conditions and decision making.",
    example: "age >= 18 AND hasID == true.",
    options: [
        "Boolean logic works with true and false values using logical operators.",
        "Boolean logic works only with images.",
        "Boolean logic is used only to store text.",
        "Boolean logic cannot be used in conditions."
    ]
},

{
    question: "What is the AND operator?",
    answer: "AND returns true only when all connected conditions are true.",
    explanation: "Every required condition must be satisfied.",
    example: "A user can enter when the username and password are both correct.",
    options: [
        "AND returns true only when all connected conditions are true.",
        "AND returns true when every condition is false.",
        "AND returns true when no condition is checked.",
        "AND is used only to delete records."
    ]
},

{
    question: "What is the OR operator?",
    answer: "OR returns true when at least one connected condition is true.",
    explanation: "Any one valid condition can satisfy the requirement.",
    example: "A user can log in using an email OR phone number.",
    options: [
        "OR returns true when at least one connected condition is true.",
        "OR returns true only when all conditions are false.",
        "OR requires every condition to be false.",
        "OR is used only to store database records."
    ]
},

{
    question: "What is the NOT operator?",
    answer: "NOT reverses a Boolean condition.",
    explanation: "True becomes false and false becomes true.",
    example: "NOT loggedIn means the user is not logged in.",
    options: [
        "NOT reverses a Boolean condition.",
        "NOT always makes a condition true.",
        "NOT always makes a condition false.",
        "NOT is used only for sorting values."
    ]
},

{
    question: "What is a logical sequence?",
    answer: "A logical sequence is an ordered set of steps that leads toward a solution.",
    explanation: "Steps should follow a meaningful order.",
    example: "Input marks → calculate total → calculate average → display result.",
    options: [
        "A logical sequence is an ordered set of steps that leads toward a solution.",
        "A logical sequence contains randomly arranged steps.",
        "A logical sequence means skipping required steps.",
        "A logical sequence is a database table."
    ]
},

{
    question: "What is classification?",
    answer: "Classification is the process of grouping items based on common properties.",
    explanation: "It makes information easier to analyze and process.",
    example: "Classifying students as pass or fail based on marks.",
    options: [
        "Classification is the process of grouping items based on common properties.",
        "Classification means randomly separating all items.",
        "Classification means deleting similar items.",
        "Classification is used only for programming errors."
    ]
},
{
    question: "What is comparison in problem solving?",
    answer: "Comparison evaluates two or more values or options to identify differences or similarities.",
    explanation: "It helps make decisions.",
    example: "Comparing two algorithms based on execution time.",
    options: [
        "Comparison evaluates two or more values or options to identify differences or similarities.",
        "Comparison means deleting all values from a program.",
        "Comparison means selecting an option without checking it.",
        "Comparison is used only to store data."
    ]
},

{
    question: "What is cause-and-effect reasoning?",
    answer: "Cause-and-effect reasoning identifies how one event or condition produces another result.",
    explanation: "It helps identify the reason behind a problem.",
    example: "Incorrect input validation can cause unexpected program output.",
    options: [
        "Cause-and-effect reasoning identifies how one event or condition produces another result.",
        "Cause-and-effect reasoning ignores the cause of a problem.",
        "Cause-and-effect reasoning means randomly changing program values.",
        "Cause-and-effect reasoning is used only for database design."
    ]
},

{
    question: "What is a decision tree?",
    answer: "A decision tree is a diagram that represents decisions and their possible outcomes.",
    explanation: "Each branch represents a condition or choice.",
    example: "A loan approval system can use income and credit score to make decisions.",
    options: [
        "A decision tree is a diagram that represents decisions and their possible outcomes.",
        "A decision tree is a database table.",
        "A decision tree is used only to store images.",
        "A decision tree represents only program errors."
    ]
},

{
    question: "What is sequencing?",
    answer: "Sequencing means arranging actions in the correct order.",
    explanation: "Correct order is important for producing the expected result.",
    example: "A program must read input before processing it.",
    options: [
        "Sequencing means arranging actions in the correct order.",
        "Sequencing means executing actions randomly.",
        "Sequencing means skipping the first step.",
        "Sequencing is a method of storing database records."
    ]
},

{
    question: "What is prioritization?",
    answer: "Prioritization means arranging tasks according to their importance or urgency.",
    explanation: "Important problems are handled first.",
    example: "Fixing a security vulnerability before improving button design.",
    options: [
        "Prioritization means arranging tasks according to their importance or urgency.",
        "Prioritization means completing tasks randomly.",
        "Prioritization means ignoring urgent problems.",
        "Prioritization is used only for creating databases."
    ]
},

{
    question: "What is contradiction in logical reasoning?",
    answer: "A contradiction occurs when two statements cannot both be true at the same time.",
    explanation: "Detecting contradictions helps identify incorrect assumptions.",
    example: "A system cannot simultaneously state that a user is both logged in and logged out.",
    options: [
        "A contradiction occurs when two statements cannot both be true at the same time.",
        "A contradiction occurs when all statements are true.",
        "A contradiction means two identical statements are stored.",
        "A contradiction is a type of programming language."
    ]
},

{
    question: "What is an assumption?",
    answer: "An assumption is something accepted as true without immediate proof.",
    explanation: "Incorrect assumptions can lead to incorrect solutions.",
    example: "Assuming every user has a valid email address may cause validation problems.",
    options: [
        "An assumption is something accepted as true without immediate proof.",
        "An assumption is always a proven fact.",
        "An assumption is the final output of a program.",
        "An assumption is a database constraint."
    ]
},

{
    question: "Why should assumptions be checked?",
    answer: "Assumptions should be checked to ensure that the solution is based on accurate information.",
    explanation: "Unchecked assumptions can cause errors.",
    example: "Testing whether a list can actually be empty before accessing its first element.",
    options: [
        "Assumptions should be checked to ensure that the solution is based on accurate information.",
        "Assumptions should never be checked.",
        "Assumptions should be checked only after deleting the program.",
        "Assumptions are checked only to improve webpage colors."
    ]
},

{
    question: "What is analytical thinking?",
    answer: "Analytical thinking involves breaking information into parts and examining each part carefully.",
    explanation: "It helps identify relationships, causes, and possible solutions.",
    example: "Analyzing why a website loads slowly by checking images, scripts, and network requests.",
    options: [
        "Analytical thinking involves breaking information into parts and examining each part carefully.",
        "Analytical thinking means ignoring individual parts.",
        "Analytical thinking means making decisions randomly.",
        "Analytical thinking is used only for storing data."
    ]
},

{
    question: "What is critical thinking?",
    answer: "Critical thinking is the ability to evaluate information objectively before reaching a conclusion.",
    explanation: "It helps avoid decisions based on incomplete or incorrect information.",
    example: "Comparing multiple algorithms before choosing one for a problem.",
    options: [
        "Critical thinking is the ability to evaluate information objectively before reaching a conclusion.",
        "Critical thinking means accepting every piece of information without checking.",
        "Critical thinking means avoiding all available information.",
        "Critical thinking is used only for database queries."
    ]
},

{
    question: "What is an algorithm?",
    answer: "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
    explanation: "It provides a clear procedure for reaching a result.",
    example: "Steps for finding the largest number in a list.",
    options: [
        "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
        "An algorithm is a programming error.",
        "An algorithm is a database table.",
        "An algorithm is a computer hardware device."
    ]
},

{
    question: "What are the characteristics of a good algorithm?",
    answer: "A good algorithm should be clear, finite, correct, efficient, and have well-defined inputs and outputs.",
    explanation: "These characteristics make an algorithm reliable and useful.",
    example: "A sorting algorithm should produce correctly ordered data efficiently.",
    options: [
        "A good algorithm should be clear, finite, correct, efficient, and have well-defined inputs and outputs.",
        "A good algorithm should be unclear and unlimited.",
        "A good algorithm should always use maximum memory.",
        "A good algorithm should ignore its inputs and outputs."
    ]
},

{
    question: "What is pseudocode?",
    answer: "Pseudocode is an informal representation of an algorithm written using simple programming-like statements.",
    explanation: "It helps plan logic before writing actual code.",
    example: "READ number → IF number > 0 → PRINT \"Positive\".",
    options: [
        "Pseudocode is an informal representation of an algorithm written using simple programming-like statements.",
        "Pseudocode is executable machine code.",
        "Pseudocode is a database management system.",
        "Pseudocode is a programming error."
    ]
},

{
    question: "What is a flowchart?",
    answer: "A flowchart is a graphical representation of an algorithm or process.",
    explanation: "It uses symbols and arrows to show the flow of operations.",
    example: "A flowchart for calculating a student's grade.",
    options: [
        "A flowchart is a graphical representation of an algorithm or process.",
        "A flowchart is a programming language.",
        "A flowchart is used only to store database records.",
        "A flowchart is a type of computer hardware."
    ]
},

{
    question: "What is the purpose of the Start/End symbol in a flowchart?",
    answer: "It represents the beginning or ending point of a process.",
    explanation: "It clearly shows where the flow starts and stops.",
    example: "A flowchart begins with Start and ends with End.",
    options: [
        "It represents the beginning or ending point of a process.",
        "It represents a database table.",
        "It represents only a decision condition.",
        "It represents a programming error."
    ]
},
{
    question: "What is the purpose of a process symbol?",
    answer: "A process symbol represents an operation or instruction.",
    explanation: "It shows an action performed by the algorithm.",
    example: "Total = Mark1 + Mark2 can be represented as a process.",
    options: [
        "A process symbol represents an operation or instruction.",
        "A process symbol represents only the start of a flowchart.",
        "A process symbol represents a database relationship.",
        "A process symbol is used to store passwords."
    ]
},

{
    question: "What is the purpose of a decision symbol?",
    answer: "A decision symbol represents a condition that produces different paths.",
    explanation: "It is commonly shown as a diamond shape.",
    example: "Is mark >= 40? produces Yes and No paths.",
    options: [
        "A decision symbol represents a condition that produces different paths.",
        "A decision symbol represents only data storage.",
        "A decision symbol represents the ending of every program.",
        "A decision symbol is used only for displaying text."
    ]
},

{
    question: "What is the purpose of an input/output symbol?",
    answer: "It represents data input or output in a flowchart.",
    explanation: "It shows where information enters or leaves the process.",
    example: "Reading a student's mark is an input operation.",
    options: [
        "It represents data input or output in a flowchart.",
        "It represents only a decision.",
        "It represents a database key.",
        "It represents a programming error."
    ]
},

{
    question: "What is an iterative process?",
    answer: "An iterative process repeats a set of steps until a condition is satisfied.",
    explanation: "Loops are commonly used to implement iteration.",
    example: "Repeating a calculation for every item in a list.",
    options: [
        "An iterative process repeats a set of steps until a condition is satisfied.",
        "An iterative process executes every step only once.",
        "An iterative process avoids all conditions.",
        "An iterative process is used only to store data."
    ]
},

{
    question: "What is a sequential algorithm?",
    answer: "A sequential algorithm executes instructions one after another in a fixed order.",
    explanation: "Each step is performed after the previous step.",
    example: "Input two numbers → add them → display the result.",
    options: [
        "A sequential algorithm executes instructions one after another in a fixed order.",
        "A sequential algorithm executes instructions randomly.",
        "A sequential algorithm skips all previous steps.",
        "A sequential algorithm is used only for database management."
    ]
},

{
    question: "What is a selection algorithm?",
    answer: "A selection algorithm chooses different actions based on conditions.",
    explanation: "It uses decision-making structures such as if-else.",
    example: "Displaying Pass or Fail based on marks.",
    options: [
        "A selection algorithm chooses different actions based on conditions.",
        "A selection algorithm always performs the same action.",
        "A selection algorithm ignores all conditions.",
        "A selection algorithm is used only to store values."
    ]
},

{
    question: "What is an iterative algorithm?",
    answer: "An iterative algorithm repeatedly executes a set of instructions.",
    explanation: "It continues until a termination condition is reached.",
    example: "Finding the sum of numbers from 1 to 100 using a loop.",
    options: [
        "An iterative algorithm repeatedly executes a set of instructions.",
        "An iterative algorithm executes only one instruction.",
        "An iterative algorithm never uses repetition.",
        "An iterative algorithm is a database structure."
    ]
},

{
    question: "What is recursion?",
    answer: "Recursion is a technique where a function calls itself to solve smaller versions of a problem.",
    explanation: "A base condition is needed to stop recursive calls.",
    example: "Calculating factorial using recursion.",
    options: [
        "Recursion is a technique where a function calls itself to solve smaller versions of a problem.",
        "Recursion means a function can never call itself.",
        "Recursion is used only to store database records.",
        "Recursion means repeating code without a function."
    ]
},

{
    question: "What is a base case in recursion?",
    answer: "A base case is the condition that stops recursive calls.",
    explanation: "Without a base case, recursion may continue indefinitely.",
    example: "In factorial, factorial(0) = 1 can be the base case.",
    options: [
        "A base case is the condition that stops recursive calls.",
        "A base case starts an infinite loop.",
        "A base case is the final database record.",
        "A base case is used only for sorting."
    ]
},

{
    question: "What is a loop?",
    answer: "A loop repeatedly executes a block of instructions while a condition is satisfied.",
    explanation: "Loops reduce repetitive code.",
    example: "A for loop can print numbers from 1 to 10.",
    options: [
        "A loop repeatedly executes a block of instructions while a condition is satisfied.",
        "A loop executes an instruction only once.",
        "A loop is used only to create databases.",
        "A loop always stops before executing."
    ]
},

{
    question: "What is an infinite loop?",
    answer: "An infinite loop is a loop that never reaches its termination condition.",
    explanation: "It continues executing indefinitely.",
    example: "while(true) creates an infinite loop unless explicitly stopped.",
    options: [
        "An infinite loop is a loop that never reaches its termination condition.",
        "An infinite loop always stops after one iteration.",
        "An infinite loop is a database constraint.",
        "An infinite loop is used only for input validation."
    ]
},

{
    question: "What is algorithm termination?",
    answer: "Algorithm termination means an algorithm eventually stops after completing its required operations.",
    explanation: "A valid algorithm must have a clear stopping point.",
    example: "A loop that stops when all elements have been processed.",
    options: [
        "Algorithm termination means an algorithm eventually stops after completing its required operations.",
        "Algorithm termination means an algorithm runs forever.",
        "Algorithm termination means deleting the algorithm.",
        "Algorithm termination is a type of database operation."
    ]
},

{
    question: "What is algorithm correctness?",
    answer: "Algorithm correctness means the algorithm produces the expected result for valid inputs.",
    explanation: "A solution is useful only if it solves the problem accurately.",
    example: "A sorting algorithm should correctly arrange all input values.",
    options: [
        "Algorithm correctness means the algorithm produces the expected result for valid inputs.",
        "Algorithm correctness means the program must always contain errors.",
        "Algorithm correctness means ignoring the expected result.",
        "Algorithm correctness is related only to webpage design."
    ]
},

{
    question: "What is algorithm efficiency?",
    answer: "Algorithm efficiency measures how effectively an algorithm uses time and memory.",
    explanation: "Efficient algorithms handle large inputs better.",
    example: "Binary search is generally faster than linear search on sorted data.",
    options: [
        "Algorithm efficiency measures how effectively an algorithm uses time and memory.",
        "Algorithm efficiency measures only the screen size.",
        "Algorithm efficiency means using maximum memory.",
        "Algorithm efficiency means ignoring execution time."
    ]
},

{
    question: "What is a dry run?",
    answer: "A dry run is manually executing an algorithm step by step using sample input.",
    explanation: "It helps find logical errors before running the actual program.",
    example: "Tracing each step of a loop using the values 1, 2, and 3.",
    options: [
        "A dry run is manually executing an algorithm step by step using sample input.",
        "A dry run means deleting the program before testing.",
        "A dry run means running a program without any input.",
        "A dry run is a database backup method."
    ]
},
{
    question: "What is debugging?",
    answer: "Debugging is the process of finding and fixing errors in a program.",
    explanation: "It helps make the program work correctly.",
    example: "Finding and fixing an incorrect condition in an if statement.",
    options: [
        "Debugging is the process of finding and fixing errors in a program.",
        "Debugging means creating new errors in a program.",
        "Debugging means deleting all program files.",
        "Debugging is used only for designing websites."
    ]
},

{
    question: "What is a syntax error?",
    answer: "A syntax error occurs when the rules of a programming language are violated.",
    explanation: "The program usually cannot be executed until the syntax error is corrected.",
    example: "Missing a closing bracket in a program can cause a syntax error.",
    options: [
        "A syntax error occurs when the rules of a programming language are violated.",
        "A syntax error occurs only when the output is correct.",
        "A syntax error means the computer has no memory.",
        "A syntax error is a type of database relationship."
    ]
},

{
    question: "What is a logical error?",
    answer: "A logical error occurs when a program runs but produces an incorrect result.",
    explanation: "The code is syntactically valid, but the logic is incorrect.",
    example: "Using addition instead of subtraction when calculating a difference.",
    options: [
        "A logical error occurs when a program runs but produces an incorrect result.",
        "A logical error always prevents a program from starting.",
        "A logical error means the program has no variables.",
        "A logical error is a hardware failure."
    ]
},

{
    question: "What is a runtime error?",
    answer: "A runtime error occurs while a program is executing.",
    explanation: "It may cause the program to stop unexpectedly.",
    example: "Dividing a number by zero during program execution.",
    options: [
        "A runtime error occurs while a program is executing.",
        "A runtime error occurs only before writing the program.",
        "A runtime error means the program has perfect output.",
        "A runtime error is used to create flowcharts."
    ]
},

{
    question: "What is testing?",
    answer: "Testing is the process of checking a program to find errors and verify that it works as expected.",
    explanation: "Testing helps ensure that software produces correct results.",
    example: "Testing a login form with valid and invalid passwords.",
    options: [
        "Testing is the process of checking a program to find errors and verify that it works as expected.",
        "Testing means never checking the program.",
        "Testing means deleting the source code.",
        "Testing is used only to change colors."
    ]
},

{
    question: "What is unit testing?",
    answer: "Unit testing is testing individual parts or units of a program separately.",
    explanation: "It helps verify that each small component works correctly.",
    example: "Testing a function that calculates the total price separately.",
    options: [
        "Unit testing is testing individual parts or units of a program separately.",
        "Unit testing means testing only the complete computer.",
        "Unit testing means testing without any code.",
        "Unit testing is a database storage method."
    ]
},

{
    question: "What is test data?",
    answer: "Test data is the input data used to check the behavior and correctness of a program.",
    explanation: "Different test data helps identify different types of errors.",
    example: "Using 0, positive numbers, and negative numbers to test a calculation.",
    options: [
        "Test data is the input data used to check the behavior and correctness of a program.",
        "Test data is always deleted before testing.",
        "Test data is used only to design a webpage.",
        "Test data means the program's source code."
    ]
},

{
    question: "What is input validation?",
    answer: "Input validation is the process of checking whether user input is correct and acceptable.",
    explanation: "It prevents invalid or unexpected data from being processed.",
    example: "Checking that an age field contains a valid number.",
    options: [
        "Input validation is the process of checking whether user input is correct and acceptable.",
        "Input validation means accepting every input without checking.",
        "Input validation means deleting user input.",
        "Input validation is used only for database backups."
    ]
},

{
    question: "What is exception handling?",
    answer: "Exception handling is a mechanism for handling errors or unexpected events during program execution.",
    explanation: "It allows a program to respond to errors without crashing unexpectedly.",
    example: "Using try-catch to handle a file-not-found error.",
    options: [
        "Exception handling is a mechanism for handling errors or unexpected events during program execution.",
        "Exception handling means ignoring every error.",
        "Exception handling means deleting the program.",
        "Exception handling is used only for creating images."
    ]
},

{
    question: "What is modular programming?",
    answer: "Modular programming is a programming approach that divides a program into smaller, independent modules.",
    explanation: "It makes programs easier to develop, test, and maintain.",
    example: "Separating login, payment, and report features into different modules.",
    options: [
        "Modular programming is a programming approach that divides a program into smaller, independent modules.",
        "Modular programming means writing the entire program in one line.",
        "Modular programming means removing all functions.",
        "Modular programming is a method of storing database tables."
    ]
},

{
    question: "Why are functions useful in programming?",
    answer: "Functions are useful because they organize code into reusable blocks that perform specific tasks.",
    explanation: "They improve code readability, reuse, and maintenance.",
    example: "A calculateTotal() function can be called whenever a total is needed.",
    options: [
        "Functions are useful because they organize code into reusable blocks that perform specific tasks.",
        "Functions are useful only for deleting variables.",
        "Functions make code impossible to reuse.",
        "Functions are used only for database storage."
    ]
},

{
    question: "What is code reuse?",
    answer: "Code reuse means using existing code again instead of writing the same code repeatedly.",
    explanation: "It reduces duplication and saves development time.",
    example: "Calling the same function to validate different user inputs.",
    options: [
        "Code reuse means using existing code again instead of writing the same code repeatedly.",
        "Code reuse means deleting existing code.",
        "Code reuse means writing every statement again.",
        "Code reuse is only used in database design."
    ]
},

{
    question: "What is a variable?",
    answer: "A variable is a named storage location used to hold a value that can change during program execution.",
    explanation: "Variables allow programs to store and work with data.",
    example: "age = 18 stores the value 18 in the variable age.",
    options: [
        "A variable is a named storage location used to hold a value that can change during program execution.",
        "A variable is a computer hardware device.",
        "A variable can never store any value.",
        "A variable is only used to create flowcharts."
    ]
},

{
    question: "What is a data structure?",
    answer: "A data structure is a way of organizing and storing data so it can be accessed and processed efficiently.",
    explanation: "Different data structures are suitable for different types of problems.",
    example: "An array can store a collection of values.",
    options: [
        "A data structure is a way of organizing and storing data so it can be accessed and processed efficiently.",
        "A data structure is used only to display images.",
        "A data structure means deleting all stored data.",
        "A data structure is a type of programming error."
    ]
},

{
    question: "Why is choosing the right data structure important?",
    answer: "Choosing the right data structure is important because it can improve the efficiency and performance of a program.",
    explanation: "The appropriate structure can make data operations faster and use memory effectively.",
    example: "Using a hash table can provide fast key-based data lookup.",
    options: [
        "Choosing the right data structure is important because it can improve the efficiency and performance of a program.",
        "Choosing a data structure has no effect on a program.",
        "The right data structure always makes programs slower.",
        "Data structures are used only for designing webpages."
    ]
},
],
"Teamwork & Communication":[
    {
    question: "What is teamwork?",
    answer: "Teamwork is the process of working together with others to achieve a common goal.",
    explanation: "Team members share responsibilities, ideas, and skills to complete a task successfully.",
    example: "A group of students works together to develop a college project.",
    options: [
        "Teamwork is the process of working together with others to achieve a common goal.",
        "Teamwork means working alone without sharing responsibilities.",
        "Teamwork means assigning all tasks to one person.",
        "Teamwork is a method of storing project data."
    ]
},

{
    question: "Why is teamwork important?",
    answer: "Teamwork helps people combine their skills and complete tasks more effectively.",
    explanation: "Different people have different strengths, so working together can produce better results.",
    example: "One student handles coding while another prepares the presentation.",
    options: [
        "Teamwork helps people combine their skills and complete tasks more effectively.",
        "Teamwork prevents people from sharing their skills.",
        "Teamwork means only one person should complete every task.",
        "Teamwork is useful only for individual work."
    ]
},

{
    question: "What is a team?",
    answer: "A team is a group of people who work together toward a common goal.",
    explanation: "Team members have different responsibilities but work toward the same objective.",
    example: "A software development team may include developers, testers, and designers.",
    options: [
        "A team is a group of people who work together toward a common goal.",
        "A team is a group of people who never work together.",
        "A team is a single person working independently.",
        "A team is a software tool used for coding."
    ]
},

{
    question: "What is a common goal?",
    answer: "A common goal is an objective that all team members work together to achieve.",
    explanation: "Everyone in the team focuses on the same final result.",
    example: "Completing a project before the submission deadline is a common goal.",
    options: [
        "A common goal is an objective that all team members work together to achieve.",
        "A common goal is a task completed by only one person.",
        "A common goal means every team member has a different final result.",
        "A common goal is a type of communication barrier."
    ]
},

{
    question: "What is collaboration?",
    answer: "Collaboration is the process of working with others to achieve a shared objective.",
    explanation: "Team members exchange ideas, information, and skills while working together.",
    example: "Two programmers collaborate to develop a website.",
    options: [
        "Collaboration is the process of working with others to achieve a shared objective.",
        "Collaboration means refusing to work with others.",
        "Collaboration means keeping all ideas private.",
        "Collaboration is a method of working without communication."
    ]
},

{
    question: "What is cooperation?",
    answer: "Cooperation means willingly helping and working with others.",
    explanation: "A cooperative team member supports others instead of working only for themselves.",
    example: "A student helps another teammate understand a difficult programming concept.",
    options: [
        "Cooperation means willingly helping and working with others.",
        "Cooperation means refusing to help teammates.",
        "Cooperation means completing every task alone.",
        "Cooperation means avoiding communication with others."
    ]
},

{
    question: "What is team coordination?",
    answer: "Team coordination is organizing the activities of team members so that they work effectively together.",
    explanation: "Good coordination prevents confusion and duplication of work.",
    example: "A team leader assigns different project tasks to different members.",
    options: [
        "Team coordination is organizing the activities of team members so that they work effectively together.",
        "Team coordination means assigning the same task to everyone.",
        "Team coordination means working without a plan.",
        "Team coordination means preventing team members from communicating."
    ]
},

{
    question: "What is the role of a team member?",
    answer: "A team member is responsible for completing assigned tasks and contributing to the team's goal.",
    explanation: "Every member should actively participate and complete their responsibilities.",
    example: "A team member responsible for testing checks whether the application works correctly.",
    options: [
        "A team member is responsible for completing assigned tasks and contributing to the team's goal.",
        "A team member should avoid all assigned tasks.",
        "A team member should allow others to do all the work.",
        "A team member is responsible only for managing the team leader."
    ]
},

{
    question: "Why should team members share responsibilities?",
    answer: "Sharing responsibilities distributes the workload and helps complete tasks efficiently.",
    explanation: "One person does not have to handle everything alone.",
    example: "Four students divide a project into coding, documentation, testing, and presentation.",
    options: [
        "Sharing responsibilities distributes the workload and helps complete tasks efficiently.",
        "Sharing responsibilities makes one person responsible for all tasks.",
        "Sharing responsibilities prevents tasks from being completed.",
        "Sharing responsibilities means avoiding teamwork."
    ]
},

{
    question: "What is trust in teamwork?",
    answer: "Trust is confidence that team members will perform their responsibilities honestly and reliably.",
    explanation: "Team members should be able to depend on each other.",
    example: "A developer trusts a teammate to complete the database module on time.",
    options: [
        "Trust is confidence that team members will perform their responsibilities honestly and reliably.",
        "Trust means never depending on teammates.",
        "Trust means ignoring team responsibilities.",
        "Trust means assigning every task to the team leader."
    ]
},

{
    question: "Why is respect important in a team?",
    answer: "Respect creates a positive and professional working environment.",
    explanation: "Team members should value each other's ideas, opinions, and contributions.",
    example: "Listening politely when another member presents an idea shows respect.",
    options: [
        "Respect creates a positive and professional working environment.",
        "Respect prevents team members from sharing ideas.",
        "Respect means ignoring other people's opinions.",
        "Respect is important only when working alone."
    ]
},

{
    question: "What is team responsibility?",
    answer: "Team responsibility means being accountable for both individual tasks and the overall team objective.",
    explanation: "Members should take ownership of their work.",
    example: "If a member is responsible for documentation, they should complete it before the deadline.",
    options: [
        "Team responsibility means being accountable for both individual tasks and the overall team objective.",
        "Team responsibility means avoiding assigned tasks.",
        "Team responsibility means blaming teammates for every problem.",
        "Team responsibility means only the leader is responsible for the project."
    ]
},

{
    question: "What is active participation?",
    answer: "Active participation means regularly contributing ideas, effort, and support to the team.",
    explanation: "Team members should not remain inactive while others do all the work.",
    example: "During a project meeting, a student shares suggestions and discusses problems.",
    options: [
        "Active participation means regularly contributing ideas, effort, and support to the team.",
        "Active participation means staying silent during all activities.",
        "Active participation means allowing others to do all the work.",
        "Active participation means avoiding team discussions."
    ]
},

{
    question: "What is team spirit?",
    answer: "Team spirit is a positive attitude of cooperation, support, and unity among team members.",
    explanation: "Team members encourage each other and work together with a positive mindset.",
    example: "Team members motivate each other when a project becomes difficult.",
    options: [
        "Team spirit is a positive attitude of cooperation, support, and unity among team members.",
        "Team spirit means competing against every teammate.",
        "Team spirit means avoiding cooperation.",
        "Team spirit means working without supporting others."
    ]
},

{
    question: "What is accountability?",
    answer: "Accountability means accepting responsibility for one's actions and assigned tasks.",
    explanation: "A responsible person completes their work and accepts the results.",
    example: "If a student misses a deadline, they should inform the team instead of blaming others.",
    options: [
        "Accountability means accepting responsibility for one's actions and assigned tasks.",
        "Accountability means blaming others for your mistakes.",
        "Accountability means avoiding assigned responsibilities.",
        "Accountability means allowing others to complete your work."
    ]
},
{
    question: "How does teamwork improve productivity?",
    answer: "Teamwork improves productivity by dividing tasks and combining different skills.",
    explanation: "Multiple people can work on different parts of a project at the same time.",
    example: "Three developers can work on three different modules simultaneously.",
    options: [
        "Teamwork improves productivity by dividing tasks and combining different skills.",
        "Teamwork reduces productivity by preventing people from working together.",
        "Teamwork means only one person can work on a project.",
        "Teamwork prevents team members from using their skills."
    ]
},

{
    question: "What is team diversity?",
    answer: "Team diversity means having people with different backgrounds, skills, experiences, or perspectives in a team.",
    explanation: "Different viewpoints can help a team find better solutions.",
    example: "A team includes members skilled in programming, design, communication, and testing.",
    options: [
        "Team diversity means having people with different backgrounds, skills, experiences, or perspectives in a team.",
        "Team diversity means all team members must have exactly the same skills.",
        "Team diversity means preventing different opinions in a team.",
        "Team diversity means assigning one person to every task."
    ]
},

{
    question: "What is mutual support?",
    answer: "Mutual support means team members helping and encouraging one another.",
    explanation: "Members provide assistance when someone faces difficulty.",
    example: "A teammate helps fix a coding error before the project demonstration.",
    options: [
        "Mutual support means team members helping and encouraging one another.",
        "Mutual support means team members never help each other.",
        "Mutual support means working without communication.",
        "Mutual support means assigning all work to one member."
    ]
},

{
    question: "What makes a team successful?",
    answer: "Clear goals, communication, trust, cooperation, responsibility, and respect help make a team successful.",
    explanation: "A successful team works together effectively and focuses on its common goal.",
    example: "A project team communicates regularly and completes each module on time.",
    options: [
        "Clear goals, communication, trust, cooperation, responsibility, and respect help make a team successful.",
        "Avoiding communication and cooperation makes a team successful.",
        "A team is successful only when one person does all the work.",
        "Ignoring responsibilities and deadlines makes a team successful."
    ]
},

{
    question: "What is the difference between a group and a team?",
    answer: "A group may consist of people working independently, while a team works together toward a common goal.",
    explanation: "Teams have shared responsibilities and coordinated efforts.",
    example: "Students sitting in the same classroom are a group, while students jointly developing a project are a team.",
    options: [
        "A group may consist of people working independently, while a team works together toward a common goal.",
        "A group and a team are always exactly the same.",
        "A team always works independently without a common goal.",
        "A group always has more responsibilities than a team."
    ]
},

{
    question: "What is communication?",
    answer: "Communication is the process of exchanging information, ideas, thoughts, or feelings between people.",
    explanation: "Communication allows people to understand each other.",
    example: "A student explains a project idea to their teammate.",
    options: [
        "Communication is the process of exchanging information, ideas, thoughts, or feelings between people.",
        "Communication means keeping information completely private.",
        "Communication means working without sharing ideas.",
        "Communication is only the process of storing information."
    ]
},

{
    question: "Why is communication important in teamwork?",
    answer: "Communication helps team members understand tasks, share ideas, and solve problems.",
    explanation: "Without proper communication, misunderstandings can occur.",
    example: "A team discusses project requirements before starting development.",
    options: [
        "Communication helps team members understand tasks, share ideas, and solve problems.",
        "Communication prevents team members from understanding tasks.",
        "Communication is useful only for individual work.",
        "Communication means avoiding discussions within a team."
    ]
},

{
    question: "What is verbal communication?",
    answer: "Verbal communication is the exchange of information using spoken words.",
    explanation: "It happens through conversations, meetings, presentations, and discussions.",
    example: "Explaining a project feature during a team meeting.",
    options: [
        "Verbal communication is the exchange of information using spoken words.",
        "Verbal communication uses only facial expressions.",
        "Verbal communication means communicating without words.",
        "Verbal communication is only written communication."
    ]
},

{
    question: "What is written communication?",
    answer: "Written communication is the exchange of information through written words.",
    explanation: "Emails, messages, reports, and documents are examples.",
    example: "Sending an email about a project meeting.",
    options: [
        "Written communication is the exchange of information through written words.",
        "Written communication uses only gestures.",
        "Written communication happens only through speaking.",
        "Written communication means avoiding written information."
    ]
},

{
    question: "What is non-verbal communication?",
    answer: "Non-verbal communication is communication through body language, facial expressions, gestures, and posture.",
    explanation: "People can communicate messages without speaking.",
    example: "Nodding the head can show agreement.",
    options: [
        "Non-verbal communication is communication through body language, facial expressions, gestures, and posture.",
        "Non-verbal communication uses only written documents.",
        "Non-verbal communication requires speaking every message.",
        "Non-verbal communication means not communicating at all."
    ]
},

{
    question: "What is active listening?",
    answer: "Active listening means carefully listening, understanding, and responding to what another person says.",
    explanation: "It requires attention instead of simply waiting for your turn to speak.",
    example: "A student listens carefully to a teammate's problem before giving a solution.",
    options: [
        "Active listening means carefully listening, understanding, and responding to what another person says.",
        "Active listening means waiting for your turn without paying attention.",
        "Active listening means ignoring what another person says.",
        "Active listening means speaking continuously without listening."
    ]
},

{
    question: "Why is listening important?",
    answer: "Listening helps understand information correctly and reduces misunderstandings.",
    explanation: "Good listening improves communication and relationships.",
    example: "A developer listens carefully to a client's requirements.",
    options: [
        "Listening helps understand information correctly and reduces misunderstandings.",
        "Listening increases misunderstandings between team members.",
        "Listening prevents people from understanding information.",
        "Listening is useful only when working alone."
    ]
},

{
    question: "What is clear communication?",
    answer: "Clear communication means expressing information in a simple and understandable way.",
    explanation: "The message should be easy for the receiver to understand.",
    example: "Instead of saying “Fix that thing,” say “Fix the login button alignment.”",
    options: [
        "Clear communication means expressing information in a simple and understandable way.",
        "Clear communication means using confusing and unclear messages.",
        "Clear communication means avoiding specific information.",
        "Clear communication means giving incomplete instructions."
    ]
},

{
    question: "What is effective communication?",
    answer: "Effective communication is communication that successfully delivers the intended message and understanding.",
    explanation: "The receiver should understand what the sender means.",
    example: "A team leader clearly explains each member's project responsibility.",
    options: [
        "Effective communication is communication that successfully delivers the intended message and understanding.",
        "Effective communication means the receiver does not understand the message.",
        "Effective communication means avoiding all communication.",
        "Effective communication means giving unclear instructions."
    ]
},

{
    question: "What is feedback?",
    answer: "Feedback is information given about a person's work, behavior, or performance.",
    explanation: "Feedback helps people understand what they are doing well and what they can improve.",
    example: "A teammate suggests improving the design of a presentation.",
    options: [
        "Feedback is information given about a person's work, behavior, or performance.",
        "Feedback means refusing to comment on someone's work.",
        "Feedback means deleting a person's work.",
        "Feedback is only information about computer hardware."
    ]
},
{
    question: "Why is constructive feedback important?",
    answer: "Constructive feedback helps a person improve without unnecessarily criticizing them.",
    explanation: "Good feedback focuses on improvement and provides useful suggestions.",
    example: "“The presentation is good; adding more examples will make it clearer.”",
    options: [
        "Constructive feedback helps a person improve without unnecessarily criticizing them.",
        "Constructive feedback is used to discourage team members.",
        "Constructive feedback means criticizing a person without suggestions.",
        "Constructive feedback prevents people from improving."
    ]
},

{
    question: "What is body language?",
    answer: "Body language is communication through physical movements, gestures, posture, and facial expressions.",
    explanation: "How a person stands, looks, or gestures can communicate information.",
    example: "Maintaining eye contact during a presentation can show confidence.",
    options: [
        "Body language is communication through physical movements, gestures, posture, and facial expressions.",
        "Body language means communication only through emails.",
        "Body language means speaking without any physical movement.",
        "Body language is a method of storing information."
    ]
},

{
    question: "What is eye contact?",
    answer: "Eye contact means looking at another person while communicating.",
    explanation: "Appropriate eye contact can show attention and confidence.",
    example: "Looking at interviewers while answering questions.",
    options: [
        "Eye contact means looking at another person while communicating.",
        "Eye contact means avoiding the person completely.",
        "Eye contact means communicating only through written messages.",
        "Eye contact means closing the eyes during communication."
    ]
},

{
    question: "What is tone of voice?",
    answer: "Tone of voice is the way a person's voice expresses attitude or emotion.",
    explanation: "The same words can have different meanings depending on tone.",
    example: "Speaking calmly during a disagreement can prevent conflict.",
    options: [
        "Tone of voice is the way a person's voice expresses attitude or emotion.",
        "Tone of voice means the number of words in a message.",
        "Tone of voice is a type of written communication.",
        "Tone of voice means avoiding all emotions while speaking."
    ]
},

{
    question: "What is a communication barrier?",
    answer: "A communication barrier is anything that prevents information from being understood correctly.",
    explanation: "Language differences, noise, unclear messages, and poor listening can create barriers.",
    example: "A noisy room makes it difficult for team members to hear each other.",
    options: [
        "A communication barrier is anything that prevents information from being understood correctly.",
        "A communication barrier always improves understanding.",
        "A communication barrier means perfect communication.",
        "A communication barrier is a method of sharing information faster."
    ]
},

{
    question: "How can communication barriers be reduced?",
    answer: "Communication barriers can be reduced through clear language, active listening, appropriate communication methods, and clarification.",
    explanation: "Make the message simple and confirm that others understand it.",
    example: "Asking “Did everyone understand the task?” after a meeting.",
    options: [
        "Communication barriers can be reduced through clear language, active listening, appropriate communication methods, and clarification.",
        "Communication barriers can be reduced by avoiding communication.",
        "Communication barriers can be reduced by using confusing language.",
        "Communication barriers can be reduced by ignoring questions."
    ]
},

{
    question: "What is professional communication?",
    answer: "Professional communication is respectful, clear, appropriate, and purposeful communication in a workplace or academic environment.",
    explanation: "It maintains professionalism when interacting with others.",
    example: "Writing a polite and clear email to a professor.",
    options: [
        "Professional communication is respectful, clear, appropriate, and purposeful communication in a workplace or academic environment.",
        "Professional communication means using rude language.",
        "Professional communication means avoiding clear messages.",
        "Professional communication is communication used only for entertainment."
    ]
},

{
    question: "What is interpersonal communication?",
    answer: "Interpersonal communication is the exchange of information between two or more people.",
    explanation: "It includes conversations and interactions with colleagues, friends, customers, or teachers.",
    example: "Discussing a task with a teammate.",
    options: [
        "Interpersonal communication is the exchange of information between two or more people.",
        "Interpersonal communication is communication between a person and a computer only.",
        "Interpersonal communication means avoiding interaction with others.",
        "Interpersonal communication is used only for written reports."
    ]
},

{
    question: "What is presentation skill?",
    answer: "Presentation skill is the ability to communicate information clearly and confidently to an audience.",
    explanation: "Good presentation includes clear speech, organization, confidence, and suitable visual aids.",
    example: "Presenting a college project using slides.",
    options: [
        "Presentation skill is the ability to communicate information clearly and confidently to an audience.",
        "Presentation skill means reading information without understanding it.",
        "Presentation skill means avoiding the audience.",
        "Presentation skill is used only for writing database queries."
    ]
},

{
    question: "Why is asking questions important in communication?",
    answer: "Asking questions helps clarify information and avoid misunderstandings.",
    explanation: "It ensures that you understand the task or message correctly.",
    example: "Asking a team leader to clarify an unclear project requirement.",
    options: [
        "Asking questions helps clarify information and avoid misunderstandings.",
        "Asking questions always creates confusion.",
        "Asking questions prevents people from understanding tasks.",
        "Asking questions is unnecessary in teamwork."
    ]
},

{
    question: "What is a team role?",
    answer: "A team role is a specific responsibility or function assigned to a team member.",
    explanation: "Different roles help distribute work effectively.",
    example: "Developer, designer, tester, and project coordinator are different roles.",
    options: [
        "A team role is a specific responsibility or function assigned to a team member.",
        "A team role means every member performs exactly the same task.",
        "A team role means avoiding assigned responsibilities.",
        "A team role is a type of communication barrier."
    ]
},

{
    question: "Why should team roles be clearly defined?",
    answer: "Clearly defined roles prevent confusion and ensure that important tasks are assigned.",
    explanation: "Everyone knows what they are responsible for.",
    example: "One person handles database development while another handles the user interface.",
    options: [
        "Clearly defined roles prevent confusion and ensure that important tasks are assigned.",
        "Clearly defined roles create more confusion.",
        "Clearly defined roles prevent team members from knowing their tasks.",
        "Clearly defined roles mean nobody has responsibility."
    ]
},

{
    question: "What is task delegation?",
    answer: "Task delegation is assigning specific tasks to appropriate team members.",
    explanation: "A leader distributes work based on skills and responsibilities.",
    example: "A project leader assigns testing to a member who has testing experience.",
    options: [
        "Task delegation is assigning specific tasks to appropriate team members.",
        "Task delegation means keeping every task with the leader.",
        "Task delegation means assigning tasks randomly without considering skills.",
        "Task delegation means avoiding all project tasks."
    ]
},

{
    question: "What is resource sharing?",
    answer: "Resource sharing means making useful information, tools, files, or materials available to team members.",
    explanation: "Sharing resources helps everyone work efficiently.",
    example: "Team members share project documents through cloud storage.",
    options: [
        "Resource sharing means making useful information, tools, files, or materials available to team members.",
        "Resource sharing means keeping all project files private from teammates.",
        "Resource sharing means deleting shared materials.",
        "Resource sharing prevents team members from working efficiently."
    ]
},

{
    question: "What is knowledge sharing?",
    answer: "Knowledge sharing is the process of exchanging information, skills, and experience among team members.",
    explanation: "Team members learn from one another.",
    example: "An experienced programmer explains Git to a beginner.",
    options: [
        "Knowledge sharing is the process of exchanging information, skills, and experience among team members.",
        "Knowledge sharing means keeping all knowledge to yourself.",
        "Knowledge sharing means preventing teammates from learning.",
        "Knowledge sharing means deleting information from the project."
    ]
},
{
    question: "What is brainstorming?",
    answer: "Brainstorming is a technique for generating many ideas to solve a problem or develop a plan.",
    explanation: "Team members freely suggest ideas before selecting the best one.",
    example: "A team brainstorms ideas for a college project.",
    options: [
        "Brainstorming is a technique for generating many ideas to solve a problem or develop a plan.",
        "Brainstorming means accepting only one idea without discussion.",
        "Brainstorming means avoiding new ideas.",
        "Brainstorming is a method of storing project files."
    ]
},

{
    question: "What is collaborative decision-making?",
    answer: "Collaborative decision-making means making decisions by considering ideas and opinions from multiple team members.",
    explanation: "The team discusses options before choosing a solution.",
    example: "Team members discuss different technologies before selecting one for their project.",
    options: [
        "Collaborative decision-making means making decisions by considering ideas and opinions from multiple team members.",
        "Collaborative decision-making means one person makes every decision without discussion.",
        "Collaborative decision-making means ignoring team members' opinions.",
        "Collaborative decision-making means avoiding all project decisions."
    ]
},

{
    question: "What is a team meeting?",
    answer: "A team meeting is a planned discussion where members share updates, problems, and decisions.",
    explanation: "Meetings keep everyone informed.",
    example: "A project team meets every week to discuss progress.",
    options: [
        "A team meeting is a planned discussion where members share updates, problems, and decisions.",
        "A team meeting is a period where team members never communicate.",
        "A team meeting means only one person can speak.",
        "A team meeting is used only for storing project data."
    ]
},

{
    question: "What is project coordination?",
    answer: "Project coordination is organizing people, tasks, resources, and schedules to complete a project successfully.",
    explanation: "It ensures that different activities work together properly.",
    example: "A coordinator checks whether coding, testing, and documentation are progressing.",
    options: [
        "Project coordination is organizing people, tasks, resources, and schedules to complete a project successfully.",
        "Project coordination means ignoring project schedules.",
        "Project coordination means assigning all tasks to one person.",
        "Project coordination means preventing team members from communicating."
    ]
},

{
    question: "What is a team leader?",
    answer: "A team leader is a person who guides team members toward achieving a common goal.",
    explanation: "A leader helps organize tasks, solve problems, and support members.",
    example: "A project leader assigns tasks and monitors project progress.",
    options: [
        "A team leader is a person who guides team members toward achieving a common goal.",
        "A team leader is a person who avoids all team responsibilities.",
        "A team leader prevents team members from working together.",
        "A team leader only completes technical tasks alone."
    ]
},

{
    question: "What is the role of a developer in a team?",
    answer: "A developer designs, writes, and maintains software code.",
    explanation: "Developers convert requirements into working software.",
    example: "A developer creates the JavaScript functionality of a website.",
    options: [
        "A developer designs, writes, and maintains software code.",
        "A developer is responsible only for presenting slides.",
        "A developer manages only team attendance.",
        "A developer avoids writing and maintaining code."
    ]
},

{
    question: "What is the role of a tester?",
    answer: "A tester checks software to identify errors and ensure that it works as expected.",
    explanation: "Testing helps improve software quality.",
    example: "A tester checks whether the login form works correctly.",
    options: [
        "A tester checks software to identify errors and ensure that it works as expected.",
        "A tester writes only project documentation.",
        "A tester designs only the project logo.",
        "A tester avoids checking software."
    ]
},

{
    question: "What is the role of a designer?",
    answer: "A designer creates the visual appearance and user interface of a product.",
    explanation: "Designers focus on layout, colors, usability, and visual experience.",
    example: "A UI designer creates the layout of a mobile application.",
    options: [
        "A designer creates the visual appearance and user interface of a product.",
        "A designer is responsible only for database queries.",
        "A designer tests only the program's code.",
        "A designer manages only project deadlines."
    ]
},

{
    question: "What is peer support?",
    answer: "Peer support means team members helping each other with tasks, problems, or learning.",
    explanation: "Teammates provide assistance when someone needs help.",
    example: "A student helps a teammate debug a program.",
    options: [
        "Peer support means team members helping each other with tasks, problems, or learning.",
        "Peer support means refusing to help teammates.",
        "Peer support means working without communicating.",
        "Peer support means assigning every task to one person."
    ]
},

{
    question: "What is collaboration software?",
    answer: "Collaboration software is a tool that helps team members communicate, share files, and work together.",
    explanation: "These tools make remote and group work easier.",
    example: "Teams can use GitHub to manage and share code.",
    options: [
        "Collaboration software is a tool that helps team members communicate, share files, and work together.",
        "Collaboration software prevents team members from sharing files.",
        "Collaboration software is used only for playing games.",
        "Collaboration software means working without communication."
    ]
},

{
    question: "What is version control?",
    answer: "Version control is a system used to track changes in files and code over time.",
    explanation: "It helps teams manage different versions of a project.",
    example: "Git can track changes made by multiple developers.",
    options: [
        "Version control is a system used to track changes in files and code over time.",
        "Version control means deleting all previous versions.",
        "Version control prevents teams from tracking changes.",
        "Version control is used only for designing websites."
    ]
},

{
    question: "Why is documentation important in teamwork?",
    answer: "Documentation records important information so team members can understand and maintain the project.",
    explanation: "Good documentation makes knowledge easier to share.",
    example: "A README file explains how to run a software project.",
    options: [
        "Documentation records important information so team members can understand and maintain the project.",
        "Documentation makes project information impossible to share.",
        "Documentation is used only to store images.",
        "Documentation prevents team members from understanding the project."
    ]
},

{
    question: "What is task prioritization?",
    answer: "Task prioritization is arranging tasks according to their importance and urgency.",
    explanation: "Important tasks should usually be completed first.",
    example: "Fixing a critical login error before improving button colors.",
    options: [
        "Task prioritization is arranging tasks according to their importance and urgency.",
        "Task prioritization means completing every task randomly.",
        "Task prioritization means ignoring urgent tasks.",
        "Task prioritization means assigning all tasks to one person."
    ]
},

{
    question: "What is time management in teamwork?",
    answer: "Time management is planning and using available time effectively to complete team tasks.",
    explanation: "Good time management helps the team meet deadlines.",
    example: "A team creates a schedule to complete each project module.",
    options: [
        "Time management is planning and using available time effectively to complete team tasks.",
        "Time management means ignoring deadlines.",
        "Time management means completing tasks without any schedule.",
        "Time management means delaying every important task."
    ]
},

{
    question: "What is team synchronization?",
    answer: "Team synchronization means keeping team members aligned about tasks, progress, and changes.",
    explanation: "Everyone should know what is happening in the project.",
    example: "A daily update helps developers understand the current project status.",
    options: [
        "Team synchronization means keeping team members aligned about tasks, progress, and changes.",
        "Team synchronization means preventing members from knowing project updates.",
        "Team synchronization means working without sharing progress.",
        "Team synchronization means assigning unrelated tasks to everyone."
    ]
},
{
    question: "What is leadership?",
    answer: "Leadership is the ability to guide, motivate, and support people toward achieving a common goal.",
    explanation: "A good leader helps the team move in the right direction.",
    example: "A project leader guides the team during a difficult project.",
    options: [
        "Leadership is the ability to guide, motivate, and support people toward achieving a common goal.",
        "Leadership means controlling people without supporting them.",
        "Leadership means avoiding all team responsibilities.",
        "Leadership is the process of working without a common goal."
    ]
},

{
    question: "What are the qualities of a good leader?",
    answer: "Good communication, responsibility, confidence, decision-making, empathy, and honesty are important leadership qualities.",
    explanation: "A good leader supports the team while making responsible decisions.",
    example: "A leader listens to team members before making an important decision.",
    options: [
        "Good communication, responsibility, confidence, decision-making, empathy, and honesty are important leadership qualities.",
        "Ignoring team members and avoiding responsibility are leadership qualities.",
        "A good leader should never communicate with the team.",
        "A good leader should make decisions without considering anyone."
    ]
},

{
    question: "What is team motivation?",
    answer: "Team motivation is encouraging team members to remain interested and committed to achieving goals.",
    explanation: "Motivation helps people continue working even when tasks are difficult.",
    example: "A leader appreciates members for completing difficult tasks.",
    options: [
        "Team motivation is encouraging team members to remain interested and committed to achieving goals.",
        "Team motivation means discouraging team members from working.",
        "Team motivation means ignoring team members' efforts.",
        "Team motivation means preventing members from achieving goals."
    ]
},

{
    question: "What is delegation in leadership?",
    answer: "Delegation is assigning responsibilities to team members according to their abilities.",
    explanation: "A leader should not try to do every task alone.",
    example: "A leader assigns database work to a member experienced in SQL.",
    options: [
        "Delegation is assigning responsibilities to team members according to their abilities.",
        "Delegation means keeping every responsibility with the leader.",
        "Delegation means assigning tasks without considering abilities.",
        "Delegation means avoiding all responsibilities."
    ]
},

{
    question: "What is decision-making?",
    answer: "Decision-making is the process of selecting the best option from available alternatives.",
    explanation: "Leaders and teams often compare choices before deciding.",
    example: "Choosing between two programming languages for a project.",
    options: [
        "Decision-making is the process of selecting the best option from available alternatives.",
        "Decision-making means selecting an option without considering alternatives.",
        "Decision-making means avoiding every available choice.",
        "Decision-making means allowing problems to remain unsolved."
    ]
},

{
    question: "What is conflict?",
    answer: "Conflict is a disagreement or difference of opinions between people.",
    explanation: "Conflict can occur when team members have different ideas or interests.",
    example: "Two members disagree about the design of an application.",
    options: [
        "Conflict is a disagreement or difference of opinions between people.",
        "Conflict means complete agreement between everyone.",
        "Conflict means supporting every idea without discussion.",
        "Conflict means avoiding all communication."
    ]
},

{
    question: "What is conflict management?",
    answer: "Conflict management is the process of handling disagreements constructively and finding a suitable solution.",
    explanation: "The goal is to solve the problem without damaging teamwork.",
    example: "A leader listens to both sides and helps members agree on a solution.",
    options: [
        "Conflict management is the process of handling disagreements constructively and finding a suitable solution.",
        "Conflict management means ignoring disagreements completely.",
        "Conflict management means blaming one team member.",
        "Conflict management means increasing disagreements within the team."
    ]
},

{
    question: "What causes conflicts in teams?",
    answer: "Poor communication, unclear responsibilities, different opinions, workload issues, and misunderstandings can cause conflicts.",
    explanation: "Conflicts often happen when people do not understand each other or their responsibilities.",
    example: "Two members may both assume that the other person will complete the same task.",
    options: [
        "Poor communication, unclear responsibilities, different opinions, workload issues, and misunderstandings can cause conflicts.",
        "Clear communication and cooperation always cause conflicts.",
        "Conflicts are caused only by successful teamwork.",
        "Conflicts happen only when everyone agrees."
    ]
},

{
    question: "How can conflicts be resolved?",
    answer: "Conflicts can be resolved through communication, active listening, compromise, and problem-solving.",
    explanation: "Team members should focus on solving the issue rather than blaming each other.",
    example: "Two members discuss their different approaches and choose the most suitable one.",
    options: [
        "Conflicts can be resolved through communication, active listening, compromise, and problem-solving.",
        "Conflicts can be resolved by avoiding communication.",
        "Conflicts can be resolved by blaming teammates.",
        "Conflicts can be resolved by ignoring the problem."
    ]
},

{
    question: "What is compromise?",
    answer: "Compromise is an agreement where each side accepts some changes to reach a solution.",
    explanation: "Both sides make reasonable adjustments.",
    example: "Two designers combine useful parts of both design ideas.",
    options: [
        "Compromise is an agreement where each side accepts some changes to reach a solution.",
        "Compromise means only one side gets everything they want.",
        "Compromise means refusing to change anything.",
        "Compromise means ending communication between both sides."
    ]
},

{
    question: "What is empathy?",
    answer: "Empathy is the ability to understand and consider another person's feelings or perspective.",
    explanation: "Empathy helps people respond respectfully to others.",
    example: "A leader understands when a team member is struggling with a difficult task.",
    options: [
        "Empathy is the ability to understand and consider another person's feelings or perspective.",
        "Empathy means ignoring other people's feelings.",
        "Empathy means refusing to understand different perspectives.",
        "Empathy means making decisions without considering others."
    ]
},

{
    question: "What is emotional intelligence?",
    answer: "Emotional intelligence is the ability to understand and manage one's emotions and respond appropriately to others' emotions.",
    explanation: "It helps people handle workplace interactions effectively.",
    example: "Staying calm when receiving criticism.",
    options: [
        "Emotional intelligence is the ability to understand and manage one's emotions and respond appropriately to others' emotions.",
        "Emotional intelligence means ignoring emotions completely.",
        "Emotional intelligence means reacting angrily to every situation.",
        "Emotional intelligence is only the ability to memorize information."
    ]
},

{
    question: "What is negotiation?",
    answer: "Negotiation is the process of discussing differences to reach an acceptable agreement.",
    explanation: "People communicate and find a solution that works for both sides.",
    example: "Team members negotiate how to divide project tasks.",
    options: [
        "Negotiation is the process of discussing differences to reach an acceptable agreement.",
        "Negotiation means refusing to discuss differences.",
        "Negotiation means forcing one person to accept every decision.",
        "Negotiation means avoiding solutions."
    ]
},

{
    question: "What is fairness in leadership?",
    answer: "Fairness means treating team members equally and making unbiased decisions.",
    explanation: "A leader should not favor one member without a valid reason.",
    example: "Assigning tasks based on skills and workload rather than personal preference.",
    options: [
        "Fairness means treating team members equally and making unbiased decisions.",
        "Fairness means giving all opportunities to one favorite member.",
        "Fairness means making decisions based only on personal preference.",
        "Fairness means ignoring team members' skills and workload."
    ]
},

{
    question: "Why is transparency important in leadership?",
    answer: "Transparency builds trust by keeping team members informed about important decisions and changes.",
    explanation: "Team members should understand why important decisions are made.",
    example: "A leader explains why the project deadline has changed.",
    options: [
        "Transparency builds trust by keeping team members informed about important decisions and changes.",
        "Transparency reduces trust by hiding important information.",
        "Transparency means keeping every decision secret.",
        "Transparency prevents team members from understanding changes."
    ]
},
],
"Interview Skills": [
{
    question: "What is an interview?",
    answer: "An interview is a formal conversation used to evaluate a candidate for a job, internship, or other opportunity.",
    explanation: "The interviewer asks questions to understand the candidate's skills, knowledge, experience, and suitability.",
    example: "A company interviews a B.Sc Computer Science student for a software trainee position.",
    options: [
        "An interview is a formal conversation used to evaluate a candidate for a job, internship, or other opportunity.",
        "An interview is an informal meeting used only for entertainment.",
        "An interview is a written examination for all students.",
        "An interview is a discussion where only the interviewer answers questions."
    ]
},

{
    question: "What is the purpose of an interview?",
    answer: "The purpose of an interview is to assess whether a candidate is suitable for a particular role.",
    explanation: "It helps the organization understand the candidate beyond their resume.",
    example: "An interviewer checks a candidate's technical knowledge and communication skills.",
    options: [
        "The purpose of an interview is to assess whether a candidate is suitable for a particular role.",
        "The purpose of an interview is only to collect personal information.",
        "The purpose of an interview is to test handwriting skills.",
        "The purpose of an interview is to avoid evaluating candidates."
    ]
},

{
    question: "What is an interviewee?",
    answer: "An interviewee is the person who is being interviewed.",
    explanation: "The candidate answering the interviewer's questions is called the interviewee.",
    example: "A student attending a job interview is the interviewee.",
    options: [
        "An interviewee is the person who is being interviewed.",
        "An interviewee is the person who conducts the interview.",
        "An interviewee is the person who schedules the company meeting.",
        "An interviewee is the person who manages the interview room."
    ]
},

{
    question: "Who is an interviewer?",
    answer: "An interviewer is a person who conducts an interview and evaluates a candidate.",
    explanation: "The interviewer asks questions and observes the candidate's responses.",
    example: "A company's HR manager may conduct an interview.",
    options: [
        "An interviewer is a person who conducts an interview and evaluates a candidate.",
        "An interviewer is the candidate answering the questions.",
        "An interviewer is a person who only prepares resumes.",
        "An interviewer is a person who attends the interview as a student."
    ]
},

{
    question: "What are the common types of interviews?",
    answer: "Common types include HR interviews, technical interviews, behavioral interviews, panel interviews, and online interviews.",
    explanation: "Different interview types evaluate different skills and qualities.",
    example: "A software company may conduct an HR round followed by a technical round.",
    options: [
        "Common types include HR interviews, technical interviews, behavioral interviews, panel interviews, and online interviews.",
        "Common types include only written examinations and classroom tests.",
        "Common types include only group discussions and coding competitions.",
        "Common types include only telephone calls and informal meetings."
    ]
},

{
    question: "What is an HR interview?",
    answer: "An HR interview evaluates a candidate's personality, communication, career goals, and suitability for the organization.",
    explanation: "HR interviews mainly focus on personal and professional qualities.",
    example: "“Tell me about yourself” is a common HR interview question.",
    options: [
        "An HR interview evaluates a candidate's personality, communication, career goals, and suitability for the organization.",
        "An HR interview evaluates only programming syntax.",
        "An HR interview focuses only on database queries.",
        "An HR interview is used only to test typing speed."
    ]
},

{
    question: "What is a technical interview?",
    answer: "A technical interview evaluates a candidate's technical knowledge and problem-solving abilities.",
    explanation: "Questions are related to the skills required for the job.",
    example: "A programming candidate may be asked to solve a coding problem.",
    options: [
        "A technical interview evaluates a candidate's technical knowledge and problem-solving abilities.",
        "A technical interview evaluates only personal hobbies.",
        "A technical interview is used only to discuss salary.",
        "A technical interview avoids technical questions completely."
    ]
},

{
    question: "What is a behavioral interview?",
    answer: "A behavioral interview evaluates how a candidate handled situations in the past.",
    explanation: "Questions often ask about previous experiences and actions.",
    example: "“Tell me about a time you solved a difficult problem.”",
    options: [
        "A behavioral interview evaluates how a candidate handled situations in the past.",
        "A behavioral interview evaluates only typing speed.",
        "A behavioral interview asks only mathematical questions.",
        "A behavioral interview avoids discussing previous experiences."
    ]
},

{
    question: "What is a panel interview?",
    answer: "A panel interview is an interview conducted by multiple interviewers at the same time.",
    explanation: "Several people evaluate the candidate together.",
    example: "HR, a technical manager, and a team leader interview a candidate together.",
    options: [
        "A panel interview is an interview conducted by multiple interviewers at the same time.",
        "A panel interview is conducted only by the candidate.",
        "A panel interview is a written examination.",
        "A panel interview is an interview where no one evaluates the candidate."
    ]
},

{
    question: "What is an online interview?",
    answer: "An online interview is an interview conducted through an internet-based video or communication platform.",
    explanation: "The candidate and interviewer communicate remotely.",
    example: "A company conducts an interview through a video meeting platform.",
    options: [
        "An online interview is an interview conducted through an internet-based video or communication platform.",
        "An online interview is conducted only through printed documents.",
        "An online interview requires the candidate to visit the company physically.",
        "An online interview is a written exam without communication."
    ]
},

{
    question: "Why is interview preparation important?",
    answer: "Interview preparation helps candidates answer questions confidently and present themselves effectively.",
    explanation: "Preparation reduces nervousness and improves performance.",
    example: "A student practices common HR questions before attending an interview.",
    options: [
        "Interview preparation helps candidates answer questions confidently and present themselves effectively.",
        "Interview preparation makes candidates avoid answering questions.",
        "Interview preparation is useful only for writing resumes.",
        "Interview preparation prevents candidates from learning about the job."
    ]
},

{
    question: "What should you research before an interview?",
    answer: "You should research the company's background, products or services, job role, requirements, and values.",
    explanation: "Company knowledge shows that you are genuinely interested in the opportunity.",
    example: "Before applying for a software job, you learn about the company's main products.",
    options: [
        "You should research the company's background, products or services, job role, requirements, and values.",
        "You should research only the interviewer's personal information.",
        "You should research only unrelated companies.",
        "You should avoid learning anything about the company."
    ]
},

{
    question: "What is a job description?",
    answer: "A job description is a document that explains the responsibilities, requirements, qualifications, and skills needed for a job.",
    explanation: "It tells candidates what the company expects from the role.",
    example: "A web developer job description may require HTML, CSS, JavaScript, and problem-solving skills.",
    options: [
        "A job description is a document that explains the responsibilities, requirements, qualifications, and skills needed for a job.",
        "A job description is a document containing only the company's address.",
        "A job description is a personal diary written by the candidate.",
        "A job description is a document used only for salary calculation."
    ]
},

{
    question: "Why should you understand the job description?",
    answer: "Understanding the job description helps you prepare relevant answers and demonstrate suitable skills.",
    explanation: "You can connect your knowledge and experience to the requirements of the role.",
    example: "If SQL is listed as a required skill, you should revise important SQL concepts.",
    options: [
        "Understanding the job description helps you prepare relevant answers and demonstrate suitable skills.",
        "Understanding the job description prevents you from preparing for the interview.",
        "Understanding the job description is useful only for choosing interview clothes.",
        "Understanding the job description means ignoring the required skills."
    ]
},

{
    question: "What is interview preparation?",
    answer: "Interview preparation is the process of reviewing relevant knowledge, practicing questions, researching the company, and preparing yourself for the interview.",
    explanation: "Preparation helps you become more confident and organized.",
    example: "Practicing “Tell me about yourself” before the interview.",
    options: [
        "Interview preparation is the process of reviewing relevant knowledge, practicing questions, researching the company, and preparing yourself for the interview.",
        "Interview preparation means attending an interview without any preparation.",
        "Interview preparation means avoiding practice questions.",
        "Interview preparation means researching only unrelated topics."
    ]
},
{
    question: "Why should candidates practice interview questions?",
    answer: "Practicing questions helps candidates organize their thoughts and answer more confidently.",
    explanation: "Practice reduces hesitation during the actual interview.",
    example: "Practicing common HR questions with a friend.",
    options: [
        "Practicing questions helps candidates organize their thoughts and answer more confidently.",
        "Practicing questions makes candidates less prepared.",
        "Candidates should avoid practicing before an interview.",
        "Practicing questions is useful only after the interview."
    ]
},

{
    question: "What documents should you prepare for an interview?",
    answer: "Important documents may include a resume, certificates, identification documents, portfolio, and other requested materials.",
    explanation: "Keeping documents ready prevents last-minute problems.",
    example: "A student carries their resume and educational certificates to an interview.",
    options: [
        "Important documents may include a resume, certificates, identification documents, portfolio, and other requested materials.",
        "Only a mobile phone is required for every interview.",
        "Candidates should avoid carrying any documents.",
        "Only personal photographs are required."
    ]
},

{
    question: "What is an interview portfolio?",
    answer: "An interview portfolio is a collection of work samples, projects, achievements, or documents that demonstrate a candidate's abilities.",
    explanation: "It provides evidence of practical skills.",
    example: "A computer science student shows a website or software project they developed.",
    options: [
        "An interview portfolio is a collection of work samples, projects, achievements, or documents that demonstrate a candidate's abilities.",
        "An interview portfolio is a list of unrelated personal activities.",
        "An interview portfolio contains only interview questions.",
        "An interview portfolio is a document used only by interviewers."
    ]
},

{
    question: "Why is punctuality important in an interview?",
    answer: "Punctuality demonstrates responsibility, professionalism, and respect for the interviewer's time.",
    explanation: "Arriving late can create a negative first impression.",
    example: "Reaching the interview location 10–15 minutes early.",
    options: [
        "Punctuality demonstrates responsibility, professionalism, and respect for the interviewer's time.",
        "Punctuality means arriving late to show confidence.",
        "Punctuality is not important during interviews.",
        "Punctuality means arriving only after the interviewer leaves."
    ]
},

{
    question: "What is a first impression?",
    answer: "A first impression is the initial opinion someone forms about a person.",
    explanation: "Appearance, communication, confidence, and behavior can influence the first impression.",
    example: "Greeting the interviewer politely can create a positive first impression.",
    options: [
        "A first impression is the initial opinion someone forms about a person.",
        "A first impression is the final result of an interview.",
        "A first impression is a written job description.",
        "A first impression is the candidate's salary expectation."
    ]
},

{
    question: "What is “Tell me about yourself”?",
    answer: "It is a common interview question that asks the candidate to briefly introduce their education, skills, interests, and relevant experience.",
    explanation: "The answer should be professional and related to the job.",
    example: "A student can mention their degree, technical skills, projects, and career interest.",
    options: [
        "It is a common interview question that asks the candidate to briefly introduce their education, skills, interests, and relevant experience.",
        "It asks the candidate to describe their personal life in complete detail.",
        "It is a question about the interviewer's background.",
        "It asks the candidate to explain the company's history."
    ]
},

{
    question: "How should you answer “Tell me about yourself”?",
    answer: "Give a short and structured introduction covering your education, skills, projects, strengths, and career goal.",
    explanation: "Avoid unnecessary personal information.",
    example: "“I am a B.Sc Computer Science student interested in web development and programming.”",
    options: [
        "Give a short and structured introduction covering your education, skills, projects, strengths, and career goal.",
        "Give a very long explanation about unrelated personal information.",
        "Avoid mentioning your education and skills.",
        "Talk only about your hobbies and entertainment."
    ]
},

{
    question: "What are your strengths?",
    answer: "Strengths are positive qualities or abilities that help you perform effectively.",
    explanation: "Choose strengths relevant to the job and support them with examples.",
    example: "“One of my strengths is that I am a quick learner.”",
    options: [
        "Strengths are positive qualities or abilities that help you perform effectively.",
        "Strengths are weaknesses that prevent you from working.",
        "Strengths are only academic marks.",
        "Strengths are problems faced during an interview."
    ]
},

{
    question: "What are your weaknesses?",
    answer: "A weakness is an area where you can improve.",
    explanation: "Mention a genuine but manageable weakness and explain how you are improving it.",
    example: "“I sometimes spend extra time checking my work, so I am learning to manage my time better.”",
    options: [
        "A weakness is an area where you can improve.",
        "A weakness is a skill that is already perfect.",
        "A weakness is always something unrelated to personal improvement.",
        "A weakness means refusing to learn new skills."
    ]
},

{
    question: "Why do you want this job?",
    answer: "You should explain how the job matches your skills, interests, career goals, and learning opportunities.",
    explanation: "Show genuine interest in the role.",
    example: "“This role matches my interest in web development and will help me apply my technical skills.”",
    options: [
        "You should explain how the job matches your skills, interests, career goals, and learning opportunities.",
        "You should say that you want the job only because it is easy.",
        "You should avoid explaining your interest in the role.",
        "You should say that the job does not match your career goals."
    ]
},

{
    question: "Why should we hire you?",
    answer: "Explain the skills, qualities, and attitude that make you suitable for the role.",
    explanation: "Focus on what value you can bring to the organization.",
    example: "“I have a strong interest in programming, I learn quickly, and I am willing to improve my skills.”",
    options: [
        "Explain the skills, qualities, and attitude that make you suitable for the role.",
        "Tell the interviewer that you have no useful skills.",
        "Avoid explaining what you can contribute.",
        "Say that you are suitable because you do not want to learn anything."
    ]
},

{
    question: "What are your career goals?",
    answer: "Career goals are the professional objectives you want to achieve in the future.",
    explanation: "Your goals should show direction and willingness to grow.",
    example: "“My goal is to become a skilled software developer.”",
    options: [
        "Career goals are the professional objectives you want to achieve in the future.",
        "Career goals are only personal entertainment activities.",
        "Career goals are the problems faced during interviews.",
        "Career goals mean avoiding professional growth."
    ]
},

{
    question: "Where do you see yourself in five years?",
    answer: "Explain a realistic future career position that shows growth and commitment.",
    explanation: "Connect your future goal with the role you are applying for.",
    example: "“I see myself as an experienced software developer contributing to important projects.”",
    options: [
        "Explain a realistic future career position that shows growth and commitment.",
        "Say that you have no plans for your future.",
        "Describe only your weekend activities.",
        "Explain why you do not want to develop your career."
    ]
},

{
    question: "Why did you choose your field of study?",
    answer: "Explain your interest in the subject and how it connects with your career goals.",
    explanation: "Give an honest and positive reason.",
    example: "“I chose Computer Science because I enjoy programming and technology.”",
    options: [
        "Explain your interest in the subject and how it connects with your career goals.",
        "Say that your field has no connection to your interests.",
        "Avoid explaining your educational choice.",
        "Say that you chose the field without any reason."
    ]
},

{
    question: "What motivates you?",
    answer: "Motivation is the reason that encourages you to work toward a goal.",
    explanation: "Mention factors such as learning, achievement, solving problems, or professional growth.",
    example: "“Learning new technologies motivates me.”",
    options: [
        "Motivation is the reason that encourages you to work toward a goal.",
        "Motivation means avoiding goals and responsibilities.",
        "Motivation means refusing to learn new things.",
        "Motivation is only related to salary."
    ]
},
{
    question: "What is your greatest achievement?",
    answer: "A greatest achievement is an important accomplishment that demonstrates your skills or effort.",
    explanation: "Choose an achievement relevant to your abilities.",
    example: "Successfully completing a college software project.",
    options: [
        "A greatest achievement is an important accomplishment that demonstrates your skills or effort.",
        "A greatest achievement is avoiding all responsibilities.",
        "A greatest achievement means refusing to complete tasks.",
        "A greatest achievement is an unrelated daily activity."
    ]
},

{
    question: "Tell me about a project you completed.",
    answer: "Explain the project's purpose, your role, technologies used, and outcome.",
    explanation: "Keep the explanation clear and structured.",
    example: "Explain how you developed an AI-based skill assessment project using HTML, CSS, JavaScript, and Python.",
    options: [
        "Explain the project's purpose, your role, technologies used, and outcome.",
        "Explain only the project's name without any details.",
        "Avoid mentioning your role in the project.",
        "Talk only about unrelated personal activities."
    ]
},

{
    question: "What did you learn from your project?",
    answer: "Explain the technical and personal skills gained from completing the project.",
    explanation: "Projects demonstrate practical learning.",
    example: "You may have learned teamwork, debugging, web development, and project management.",
    options: [
        "Explain the technical and personal skills gained from completing the project.",
        "Say that you learned nothing from the project.",
        "Mention only unrelated hobbies.",
        "Avoid explaining any skills gained."
    ]
},

{
    question: "Describe a challenge you faced.",
    answer: "Explain the challenge, the actions you took, and the result.",
    explanation: "This shows your problem-solving ability.",
    example: "Fixing a JavaScript error that prevented a quiz from displaying questions.",
    options: [
        "Explain the challenge, the actions you took, and the result.",
        "Explain only the problem without describing your actions.",
        "Blame another person without explaining the situation.",
        "Avoid discussing the challenge completely."
    ]
},

{
    question: "How do you handle failure?",
    answer: "A good approach is to identify the reason for failure, learn from it, and improve your approach.",
    explanation: "Failure should be treated as an opportunity to learn.",
    example: "After receiving a low test score, you identify weak topics and practice them.",
    options: [
        "A good approach is to identify the reason for failure, learn from it, and improve your approach.",
        "Ignore the reason for failure and repeat the same mistake.",
        "Blame others for every failure.",
        "Give up immediately after a failure."
    ]
},

{
    question: "How do you handle pressure?",
    answer: "Handle pressure by staying calm, prioritizing tasks, and focusing on practical solutions.",
    explanation: "Good planning helps reduce stress during difficult situations.",
    example: "Breaking a large project into smaller tasks before a deadline.",
    options: [
        "Handle pressure by staying calm, prioritizing tasks, and focusing on practical solutions.",
        "Avoid all tasks when under pressure.",
        "Panic and stop working on the problem.",
        "Ignore deadlines and responsibilities."
    ]
},

{
    question: "What are your hobbies?",
    answer: "Hobbies are activities you enjoy doing in your free time.",
    explanation: "Mention genuine hobbies and, when possible, connect them with positive qualities.",
    example: "Reading technology articles can show an interest in learning.",
    options: [
        "Hobbies are activities you enjoy doing in your free time.",
        "Hobbies are only activities related to work.",
        "Hobbies are problems faced during interviews.",
        "Hobbies are professional qualifications."
    ]
},

{
    question: "Are you a team player?",
    answer: "A team player cooperates with others, communicates effectively, and contributes toward common goals.",
    explanation: "Give an example that demonstrates teamwork.",
    example: "“Yes. I worked with a teammate to develop a college project.”",
    options: [
        "A team player cooperates with others, communicates effectively, and contributes toward common goals.",
        "A team player avoids communicating with others.",
        "A team player works only for personal goals.",
        "A team player refuses to cooperate with teammates."
    ]
},

{
    question: "How do you handle criticism?",
    answer: "Listen carefully, understand the feedback, and use it to improve your performance.",
    explanation: "Avoid reacting defensively to constructive criticism.",
    example: "Improving a presentation after receiving feedback from a teacher.",
    options: [
        "Listen carefully, understand the feedback, and use it to improve your performance.",
        "Ignore all feedback from others.",
        "React angrily to every criticism.",
        "Blame others when receiving feedback."
    ]
},

{
    question: "Do you have any questions for us?",
    answer: "Ask thoughtful questions about the role, team, responsibilities, training, or company.",
    explanation: "Asking relevant questions shows interest and preparation.",
    example: "“What skills would you recommend I develop for this role?”",
    options: [
        "Ask thoughtful questions about the role, team, responsibilities, training, or company.",
        "Say that you are not interested in knowing anything about the role.",
        "Ask only unrelated personal questions.",
        "Avoid asking any relevant questions."
    ]
},

{
    question: "Why is communication important in an interview?",
    answer: "Communication helps candidates clearly express their knowledge, ideas, experience, and personality.",
    explanation: "Good communication makes answers easier to understand.",
    example: "Clearly explaining your project during a technical interview.",
    options: [
        "Communication helps candidates clearly express their knowledge, ideas, experience, and personality.",
        "Communication makes interview answers confusing.",
        "Communication is unnecessary during interviews.",
        "Communication is useful only after getting the job."
    ]
},

{
    question: "What is confident communication?",
    answer: "Confident communication is expressing ideas clearly and calmly without being overly aggressive.",
    explanation: "Confidence helps you communicate your abilities effectively.",
    example: "Answering a question clearly while maintaining appropriate eye contact.",
    options: [
        "Confident communication is expressing ideas clearly and calmly without being overly aggressive.",
        "Confident communication means speaking aggressively to everyone.",
        "Confident communication means avoiding eye contact and questions.",
        "Confident communication means refusing to explain your ideas."
    ]
},

{
    question: "What is body language in an interview?",
    answer: "Body language includes posture, facial expressions, gestures, eye contact, and other physical behaviors during communication.",
    explanation: "Body language can influence how your confidence and attitude are perceived.",
    example: "Sitting upright during an interview shows attentiveness.",
    options: [
        "Body language includes posture, facial expressions, gestures, eye contact, and other physical behaviors during communication.",
        "Body language includes only spoken words.",
        "Body language means writing answers on paper.",
        "Body language is related only to technical skills."
    ]
},

{
    question: "Why is eye contact important?",
    answer: "Appropriate eye contact can demonstrate confidence, attention, and interest.",
    explanation: "It shows that you are engaged in the conversation.",
    example: "Looking at the interviewer while answering instead of constantly looking down.",
    options: [
        "Appropriate eye contact can demonstrate confidence, attention, and interest.",
        "Eye contact shows that you are not listening.",
        "Eye contact should always be completely avoided.",
        "Eye contact is useful only in written interviews."
    ]
},

{
    question: "What is good interview posture?",
    answer: "Good interview posture means sitting upright in a comfortable and professional position.",
    explanation: "Proper posture can communicate confidence and attentiveness.",
    example: "Sitting straight with your shoulders relaxed.",
    options: [
        "Good interview posture means sitting upright in a comfortable and professional position.",
        "Good posture means leaning back carelessly throughout the interview.",
        "Good posture means constantly moving in your chair.",
        "Good posture means looking down throughout the interview."
    ]
},
{
    question: "How should you greet an interviewer?",
    answer: "Greet the interviewer politely with a smile and appropriate professional language.",
    explanation: "A polite greeting creates a positive beginning.",
    example: "“Good morning, sir/ma'am. Thank you for the opportunity.”",
    options: [
        "Greet the interviewer politely with a smile and appropriate professional language.",
        "Ignore the interviewer when entering the room.",
        "Greet the interviewer casually without any professional language.",
        "Start asking questions without greeting the interviewer."
    ]
},

{
    question: "Why is a smile useful during an interview?",
    answer: "A natural smile can communicate friendliness, confidence, and a positive attitude.",
    explanation: "It can make the interaction more comfortable.",
    example: "Smiling politely while greeting the interviewer.",
    options: [
        "A natural smile can communicate friendliness, confidence, and a positive attitude.",
        "A smile always shows that the candidate is unprepared.",
        "A smile should never be used during an interview.",
        "A smile is useful only after the interview ends."
    ]
},

{
    question: "What is active listening during an interview?",
    answer: "Active listening means paying close attention to the interviewer and understanding the question before responding.",
    explanation: "It helps you give relevant answers.",
    example: "Waiting until the interviewer finishes speaking before answering.",
    options: [
        "Active listening means paying close attention to the interviewer and understanding the question before responding.",
        "Active listening means interrupting the interviewer.",
        "Active listening means preparing answers without listening.",
        "Active listening means ignoring the interviewer's question."
    ]
},

{
    question: "What should you do if you do not understand a question?",
    answer: "Politely ask the interviewer to repeat or clarify the question.",
    explanation: "It is better to clarify than give an unrelated answer.",
    example: "“Could you please clarify the question?”",
    options: [
        "Politely ask the interviewer to repeat or clarify the question.",
        "Give a random answer without understanding the question.",
        "Ignore the question completely.",
        "Leave the interview immediately."
    ]
},

{
    question: "How should you speak during an interview?",
    answer: "Speak clearly, calmly, confidently, and at a suitable speed.",
    explanation: "Avoid speaking too quickly or too quietly.",
    example: "Take a short pause before answering a difficult question.",
    options: [
        "Speak clearly, calmly, confidently, and at a suitable speed.",
        "Speak as quickly as possible without thinking.",
        "Speak very quietly so the interviewer cannot hear.",
        "Avoid speaking clearly during the interview."
    ]
},

{
    question: "Why is tone important in an interview?",
    answer: "Tone communicates attitude, confidence, and professionalism.",
    explanation: "A calm and respectful tone creates a positive impression.",
    example: "Speaking respectfully when discussing a disagreement.",
    options: [
        "Tone communicates attitude, confidence, and professionalism.",
        "Tone has no effect on communication.",
        "Tone should always be aggressive.",
        "Tone is important only in written communication."
    ]
},

{
    question: "What should you avoid in body language?",
    answer: "Avoid excessive nervous movements, poor posture, constant phone checking, and inappropriate gestures.",
    explanation: "These behaviors can make you appear distracted or unprepared.",
    example: "Avoid repeatedly tapping your fingers during an interview.",
    options: [
        "Avoid excessive nervous movements, poor posture, constant phone checking, and inappropriate gestures.",
        "Maintain professional posture and appropriate eye contact.",
        "Sit attentively and listen carefully.",
        "Use natural and suitable gestures."
    ]
},

{
    question: "What is professional appearance?",
    answer: "Professional appearance means dressing neatly and appropriately for the interview and maintaining good personal grooming.",
    explanation: "Appearance contributes to the overall first impression.",
    example: "Wearing clean, suitable formal or professional clothing.",
    options: [
        "Professional appearance means dressing neatly and appropriately for the interview and maintaining good personal grooming.",
        "Professional appearance means wearing unsuitable clothing.",
        "Professional appearance means ignoring personal grooming.",
        "Professional appearance means dressing without considering the interview."
    ]
},

{
    question: "How can you show confidence without being arrogant?",
    answer: "Speak clearly about your abilities while remaining respectful and open to learning.",
    explanation: "Confidence means believing in your abilities without looking down on others.",
    example: "“I have experience with JavaScript, and I am also interested in learning new technologies.”",
    options: [
        "Speak clearly about your abilities while remaining respectful and open to learning.",
        "Talk negatively about other candidates.",
        "Claim that you already know everything.",
        "Refuse to accept feedback or learn new skills."
    ]
},

{
    question: "What is verbal clarity?",
    answer: "Verbal clarity is the ability to express ideas in a clear and understandable way.",
    explanation: "Use simple and organized language.",
    example: "Explaining a database concept using a short example.",
    options: [
        "Verbal clarity is the ability to express ideas in a clear and understandable way.",
        "Verbal clarity means using confusing language.",
        "Verbal clarity means speaking without organizing ideas.",
        "Verbal clarity means avoiding explanations."
    ]
},

{
    question: "Why should answers be concise?",
    answer: "Concise answers communicate the main point without unnecessary information.",
    explanation: "Interviewers usually prefer clear and relevant responses.",
    example: "Answering a simple question in two or three meaningful sentences.",
    options: [
        "Concise answers communicate the main point without unnecessary information.",
        "Concise answers should contain unrelated information.",
        "Answers should always be extremely long.",
        "Concise answers should avoid the main point."
    ]
},

{
    question: "What should you do before answering a difficult question?",
    answer: "Take a brief moment to understand the question and organize your thoughts.",
    explanation: "A short pause is better than giving a confused answer.",
    example: "Pause for a few seconds before explaining a technical concept.",
    options: [
        "Take a brief moment to understand the question and organize your thoughts.",
        "Answer immediately without understanding the question.",
        "Ignore the question completely.",
        "Start speaking without organizing your thoughts."
    ]
},

{
    question: "How can you control interview nervousness?",
    answer: "Preparation, practice, deep breathing, positive thinking, and familiarity with common questions can reduce nervousness.",
    explanation: "Confidence usually improves with preparation.",
    example: "Practicing a mock interview before the actual interview.",
    options: [
        "Preparation, practice, deep breathing, positive thinking, and familiarity with common questions can reduce nervousness.",
        "Avoiding all interview preparation can reduce nervousness.",
        "Ignoring the interview completely can improve confidence.",
        "Speaking without preparation is the best way to control nervousness."
    ]
},

{
    question: "What is a mock interview?",
    answer: "A mock interview is a practice interview that simulates a real interview.",
    explanation: "It helps candidates practice answers, communication, and body language.",
    example: "A student asks a friend to conduct a practice HR interview.",
    options: [
        "A mock interview is a practice interview that simulates a real interview.",
        "A mock interview is the final interview conducted by a company.",
        "A mock interview is a written examination.",
        "A mock interview is an interview without any questions."
    ]
},

{
    question: "Why is listening as important as speaking?",
    answer: "Listening ensures that you understand the interviewer's question before responding.",
    explanation: "Good answers depend on understanding what was asked.",
    example: "Listening carefully to a multi-part technical question before answering.",
    options: [
        "Listening ensures that you understand the interviewer's question before responding.",
        "Listening is unnecessary when answering interview questions.",
        "Speaking is the only important skill in an interview.",
        "Listening means avoiding communication with the interviewer."
    ]
},
{
    question: "What is technical knowledge?",
    answer: "Technical knowledge is understanding the concepts, tools, technologies, and methods related to a particular field.",
    explanation: "It represents the technical skills required to perform a job.",
    example: "A web developer should understand HTML, CSS, JavaScript, and related concepts.",
    options: [
        "Technical knowledge is understanding the concepts, tools, technologies, and methods related to a particular field.",
        "Technical knowledge means avoiding all technical concepts.",
        "Technical knowledge means knowing only personal information.",
        "Technical knowledge is unrelated to job skills."
    ]
},

{
    question: "How should you prepare for a technical interview?",
    answer: "Review fundamental concepts, practice problems, revise projects, and practice explaining technical topics.",
    explanation: "Technical preparation should combine knowledge with practical problem-solving.",
    example: "A programming candidate practices coding questions before the interview.",
    options: [
        "Review fundamental concepts, practice problems, revise projects, and practice explaining technical topics.",
        "Avoid revising technical concepts before the interview.",
        "Practice only personal questions.",
        "Attend the technical interview without any preparation."
    ]
},

{
    question: "Why are programming questions asked in technical interviews?",
    answer: "Programming questions help evaluate coding ability, logical thinking, and problem-solving skills.",
    explanation: "They show how candidates approach technical problems.",
    example: "Writing a program to find the largest number in an array.",
    options: [
        "Programming questions help evaluate coding ability, logical thinking, and problem-solving skills.",
        "Programming questions are asked only to test handwriting.",
        "Programming questions are unrelated to technical skills.",
        "Programming questions are used only to test personal interests."
    ]
},

{
    question: "What is problem-solving ability?",
    answer: "Problem-solving ability is the skill of understanding a problem, developing possible solutions, and selecting an effective solution.",
    explanation: "It shows how you handle unfamiliar or difficult situations.",
    example: "Finding why a program produces an incorrect output and fixing it.",
    options: [
        "Problem-solving ability is the skill of understanding a problem, developing possible solutions, and selecting an effective solution.",
        "Problem-solving means ignoring difficult situations.",
        "Problem-solving means avoiding possible solutions.",
        "Problem-solving means allowing problems to remain unsolved."
    ]
},

{
    question: "What is debugging?",
    answer: "Debugging is the process of finding and fixing errors in a program.",
    explanation: "Developers analyze code to identify why it is not working correctly.",
    example: "Finding a missing condition in a JavaScript function.",
    options: [
        "Debugging is the process of finding and fixing errors in a program.",
        "Debugging means creating more errors in a program.",
        "Debugging means deleting a complete program.",
        "Debugging means avoiding testing the program."
    ]
},

{
    question: "What should you do if you do not know the answer to a technical question?",
    answer: "Be honest, explain what you know, and show willingness to learn.",
    explanation: "Do not invent an answer.",
    example: "“I am not completely sure about that concept, but I would like to learn it.”",
    options: [
        "Be honest, explain what you know, and show willingness to learn.",
        "Invent an answer even when you do not know it.",
        "Blame the interviewer for asking the question.",
        "Refuse to learn the concept."
    ]
},

{
    question: "Why are projects important in technical interviews?",
    answer: "Projects demonstrate practical application of technical knowledge.",
    explanation: "They provide evidence that you have used your skills in real or practical situations.",
    example: "Explaining how you developed the Skill Sense project.",
    options: [
        "Projects demonstrate practical application of technical knowledge.",
        "Projects are unrelated to technical skills.",
        "Projects only show personal hobbies.",
        "Projects cannot provide evidence of practical skills."
    ]
},

{
    question: "How should you explain your project?",
    answer: "Explain the problem, objective, technologies, main features, your role, challenges, and outcome.",
    explanation: "A structured explanation makes the project easier to understand.",
    example: "Explain how Skill Sense helps students practice skills and assessments.",
    options: [
        "Explain the problem, objective, technologies, main features, your role, challenges, and outcome.",
        "Explain only the project name.",
        "Avoid mentioning the technologies used.",
        "Talk only about unrelated personal information."
    ]
},

{
    question: "What is an HR round?",
    answer: "An HR round is an interview stage that evaluates communication, personality, attitude, career goals, and organizational fit.",
    explanation: "It focuses more on professional and personal qualities than technical details.",
    example: "Questions about strengths, weaknesses, teamwork, and career goals.",
    options: [
        "An HR round is an interview stage that evaluates communication, personality, attitude, career goals, and organizational fit.",
        "An HR round evaluates only programming syntax.",
        "An HR round is used only to test mathematical calculations.",
        "An HR round does not evaluate communication or personality."
    ]
},

{
    question: "What is organizational fit?",
    answer: "Organizational fit refers to how well a candidate's values, behavior, skills, and working style match an organization's environment.",
    explanation: "Companies want people who can work effectively within their culture.",
    example: "A candidate who values teamwork may fit well in a collaborative organization.",
    options: [
        "Organizational fit refers to how well a candidate's values, behavior, skills, and working style match an organization's environment.",
        "Organizational fit means avoiding teamwork.",
        "Organizational fit means having no connection with the organization.",
        "Organizational fit refers only to a candidate's salary."
    ]
},

{
    question: "How should you answer behavioral questions?",
    answer: "Answer behavioral questions using a clear structure such as Situation, Task, Action, and Result.",
    explanation: "This approach keeps answers organized and evidence-based.",
    example: "Describe a project problem, your responsibility, what you did, and the final result.",
    options: [
        "Answer behavioral questions using a clear structure such as Situation, Task, Action, and Result.",
        "Answer behavioral questions without explaining the situation.",
        "Avoid describing your actions and results.",
        "Give completely unrelated answers."
    ]
},

{
    question: "What is the STAR method?",
    answer: "STAR stands for Situation, Task, Action, and Result.",
    explanation: "It is a structured method for answering behavioral interview questions.",
    example: "Describe a difficult project situation, your task, the action you took, and the successful result.",
    options: [
        "STAR stands for Situation, Task, Action, and Result.",
        "STAR stands for Skills, Technology, Assessment, and Resume.",
        "STAR stands for Study, Test, Answer, and Review.",
        "STAR stands for Situation, Technology, Ability, and Research."
    ]
},

{
    question: "What is an aptitude test?",
    answer: "An aptitude test evaluates abilities such as numerical reasoning, logical reasoning, verbal ability, and problem-solving.",
    explanation: "It measures general skills useful for a job.",
    example: "Solving logical reasoning questions during a placement process.",
    options: [
        "An aptitude test evaluates abilities such as numerical reasoning, logical reasoning, verbal ability, and problem-solving.",
        "An aptitude test evaluates only physical fitness.",
        "An aptitude test measures only typing speed.",
        "An aptitude test is used only to check personal hobbies."
    ]
},

{
    question: "What is a coding assessment?",
    answer: "A coding assessment evaluates a candidate's programming and problem-solving skills through coding tasks.",
    explanation: "Candidates write programs to solve given problems.",
    example: "Writing a program to reverse a string.",
    options: [
        "A coding assessment evaluates a candidate's programming and problem-solving skills through coding tasks.",
        "A coding assessment evaluates only communication skills.",
        "A coding assessment contains only personal questions.",
        "A coding assessment does not involve programming tasks."
    ]
},

{
    question: "Why are communication skills evaluated in technical interviews?",
    answer: "Technical professionals need to explain ideas, discuss problems, and collaborate with others.",
    explanation: "Technical knowledge alone is not enough for effective teamwork.",
    example: "A developer explains a technical issue to a non-technical client.",
    options: [
        "Technical professionals need to explain ideas, discuss problems, and collaborate with others.",
        "Communication skills are unnecessary for technical professionals.",
        "Technical professionals should never explain their ideas.",
        "Communication is useful only for non-technical jobs."
    ]
},
]
};