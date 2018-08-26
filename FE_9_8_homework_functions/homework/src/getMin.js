function getMin(a, b, c) {
    return a > b
        ? b > c ? c : b
        : a > c ? c : a;
}
