var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key);
    if (typeof val === 'undefined') {
		return -1;
	}
    this.map.delete(key);
    this.map.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.map.delete(key); // returns false if not found
    this.map.set(key, value);
    let keys = this.map.keys();
    if (this.map.size > this.capacity) {
        this.map.delete(keys.next().value);
    }
};