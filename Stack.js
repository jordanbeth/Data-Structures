// Stack -- Using string
// LIFO - Last In First Out
// Push - add item to the end of the Stack
// Pop - remove the last item from the Stack
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
};

// O(1)
Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Error: Max Capacity reached."
};

// O(1)
Stack.prototype.pop = function() {
    let value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0
    }
    return value;
};

Stack.prototype.peek = function() {
    return this._storage[this._count - 1];
};

Stack.prototype.count = function() {
    return this._count;
};
