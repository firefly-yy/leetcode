// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// 逆序求和，逆序结果
const { getListFromArray, printListNode } = require('../common_functions')

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const c = getListFromArray([1, 2, 3, 2])
// const d = getListFromArray([3, 5, 9, 3])

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0)
    let result = dummyHead
    let sum = 0
    while (l1 || l2) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        dummyHead.next = new ListNode(sum % 10)
        sum = sum > 9 ? 1 : 0
        dummyHead = dummyHead.next
    }

    if (sum) {
        dummyHead.next = new ListNode(sum)
    }
    return result.next

}

