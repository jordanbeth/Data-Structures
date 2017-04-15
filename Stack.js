// Stack -- Using string
// LIFO - Last In First Out
// Push - add item to the end of the Stack
// Pop - remove the last item from the Stack
class Stack {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._count = 0;
    };

    push(value) {
        if (this._count < this._capacity) {
            this._storage[this._count++] = value;
            return this._count;
        }
        return "Error: Max Capacity reached.";
    };

    pop() {
        let value = this._storage[--this._count];
        delete this._storage[this._count];
        if (this._count < 0) {
            this._count = 0
        }
        return value;
    };

    peek() {
        return this._storage[this._count - 1];
    };

    count() {
        return this._count;
    };
};
