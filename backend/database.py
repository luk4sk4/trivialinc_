import sqlite3
import json
import os

print(f"Current Working Directory: {os.getcwd()}")

# Step 1: Open JSON file and load the data
with open('backend/data.json') as f:
    data = json.load(f)

# Step 2: Connect to SQLite database (or create it)
conn = sqlite3.connect('backend/database.db')
cursor = conn.cursor()

# Step 3: Loop through each category in the "categorias" list
for categoria in data['categorias']:
    table_name = categoria['category']  # Get the category name for the table name
    questions = categoria['questions']  # Get the list of questions

    # Create a table for each category (if it doesn't already exist)
    cursor.execute(f'''
    CREATE TABLE IF NOT EXISTS {table_name} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        PREGUNTA TEXT,
        RESPUESTA TEXT
    )
    ''')

    # Step 4: Insert each question-answer pair into the respective category's table
    for q in questions:
        cursor.execute(f'''
        INSERT INTO {table_name} (PREGUNTA, RESPUESTA) VALUES (?, ?)
        ''', (q['PREGUNTA'], q['RESPUESTA']))

# Step 5: Commit the transaction and close the connection
conn.commit()
conn.close()

print("Data successfully inserted into SQLite database.")
