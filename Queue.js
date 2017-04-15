// Queue
// FIFO - First In First Out
// Enqueue - add item to end of Queue
// Dequeue - remove item from beginnign of Queue

class Queue {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._waitingLine = {};
        this._head = 0;
        this._tail = 0;
    };

    enqueue(value) {
        if (this.count() < this._capacity) {
            this._waitingLine[this._tail++] = value;
            return this.count();
        }
        return "Error: Queue is full!!!"
    };

    dequeue() {
        let element = this._waitingLine[this._head];
        delete this._waitingLine[this._head];
        if (this._head < this._tail) this._head++;
        return element;
    };

    peek() {
        return this._waitingLine[this._head];
    };
    
    count() {
        return this._tail - this._head;
    };

    contains(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._waitingLine[i] === value) return true;
        }
        return false
    }

    until(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._waitingLine[i] === value) return i - this._head + 1;
        }
        return null;
    };

};
