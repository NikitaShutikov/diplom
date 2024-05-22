function randomize_array_order(array){
    let currentIndex = array.length;

    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
class Test {
    constructor(questions, container, result_container){
        this.questions = questions;
        this.container = container;
        this.result_container = result_container;
    }

    create(){

        this.result_container.setAttribute('class', 'd-none');
        if (this.element) this.element.remove();
        this.randomize_question_order();
        this.container.appendChild(this.create_element());
    }


    create_element() {
        this.element = document.createElement('ol');
        this.element.setAttribute('class', 'list-group list-group-numbered')

        for (let q of this.questions){
            this.element.appendChild(q.create_element());
        }
        return this.element;
    }

    validate(){

        let right_answers = 0;

        for (let q of this.questions){
            if(q.validate()) right_answers++;
        }
        this.result_container.setAttribute('class', 'alert alert-info text-center w-100');
        this.result_container.textContent = `Результат ${right_answers} из ${this.questions.length}`;
    }
    randomize_question_order() {

        this.questions = randomize_array_order(this.questions);
    }
}

class Question{
    constructor(value, answers){
        this.value = value;
        this.answers = answers;
    }

    create_element(){
        this.randomize_answer_order();
        this.element = document.createElement('fieldset');
        this.element.setAttribute('class', 'list-group-item');

        let legend = document.createElement('legend');
        legend.textContent = this.value;
        this.element.appendChild(legend);

        for (let a of this.answers){
            this.element.appendChild(a.create_element());
        }
        return this.element;
    }


    validate(){
        // debugger;
        let is_valid = true;
        for (let a of this.answers){
            if(!a.validate()) is_valid = false;
        }
        return is_valid;
    }

    randomize_answer_order() {
        this.answers = randomize_array_order(this.answers);
    }
}
class Answer{
    constructor(id, value){
        this.id = id;
        this.value = value;
    }
}

class ChoiceAnswer extends Answer{
    constructor(question_value, id, value, is_right){
        super(id, value);
        this.is_right = is_right;
        this.question_value = question_value;
    }
    validate(){

        this.element.children[0].setAttribute('disabled', '');
        if (this.is_right){
            if (this.element.children[0].checked){
                this.element.children[0].classList.add('is-valid');
                return true;
            }
            else{
                this.element.children[0].classList.add('is-invalid');
                return false;
            }
        }
        return !this.element.children[0].checked;
    }
    create_element() {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'form-check form-check');

        let input = document.createElement('input');
        input.setAttribute('class', 'form-check-input');
        input.setAttribute('name', this.question_value);
        input.setAttribute('type', 'radio');
        input.setAttribute('id', this.id);

        let label = document.createElement('label');
        label.setAttribute('class', 'form-check-label');
        label.setAttribute('for', this.id);
        label.textContent = this.value;

        this.element.appendChild(input);
        this.element.appendChild(label);
        return this.element;
    }
}

class MultipleChoiceAnswer extends Answer {
    constructor(id, value, is_right){
        super(id, value);
        this.is_right = is_right;
    }
    validate(){

        this.element.children[0].setAttribute('disabled', '');
        if (this.is_right){
            if (this.element.children[0].checked){
                this.element.children[0].classList.add('is-valid');
                return true;
            }
            else{
                this.element.children[0].classList.add('is-invalid');
                return false;
            }
        }
        return !this.element.children[0].checked;
    }
    create_element() {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'form-check form-check');

        let input = document.createElement('input');
        input.setAttribute('class', 'form-check-input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', this.id);

        let label = document.createElement('label');
        label.setAttribute('class', 'form-check-label');
        label.setAttribute('for', this.id);
        label.textContent = this.value;

        this.element.appendChild(input);
        this.element.appendChild(label);
        return this.element;
    }
}

class TextAnswer extends Answer {
    constructor(id, value){
        super(id, value);
    }
    validate(){

        this.element.setAttribute('disabled', '');
        if (this.element.value == this.value){
            this.element.classList.add('is-valid');
            return true;
        }
        else{
            this.element.classList.add('is-invalid');
            return false;
        }

    }
    create_element() {
        this.element = document.createElement('input');
        this.element.setAttribute('class', 'form-control');
        this.element.setAttribute('type', 'text');
        this.element.setAttribute('id', this.id);
        return this.element;
    }
}
//create test(questions(answers))

