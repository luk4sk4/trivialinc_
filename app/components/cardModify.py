import json
import os

category = "hello"
dirname = os.path.dirname(__file__)


def get_file_path(category):
    return os.path.join(dirname, f'..\\cards\\{category}.json')

while (category != "stop"):

    category = input("Category: ")
    question = input("Question: ")
    answer = input("Answer: ")

    def add_object(new_object):
        file_path = get_file_path(category)
        with open(file_path, 'r') as file:
            data = json.load(file)
        
        data.append(new_object)
        
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        
        print("¡Objeto agregado exitosamente!")

    new_object = {
        "question": question,
        "answer": answer
    }

    add_object(new_object)