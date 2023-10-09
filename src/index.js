module.exports = function reverse (n) {
    a = n.toString();
    b = a.split('');
    c = b.reverse();
    d = c.join('');
    e = parseInt(d);
    return e;
}
