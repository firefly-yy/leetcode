function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 将数组转成链表
const getListFromArray = (list) => {
    let dummy = new ListNode()
    let pre = dummy;
    list.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}

//将链表打印
const printListNode = (list) => {
    let result = ''
    while (list && list.next) {
        result += list.val + ' ---> '
        list = list.next
    }
    if (!list.next) {
        result += list.val
    }
    console.log(result)
}

// 数组去重
const unique(arr) => {
    return Array.from(new Set(arr))
}
module.exports = {
    getListFromArray,
    printListNode,
    unique
}