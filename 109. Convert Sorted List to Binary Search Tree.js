const sortedListToBST = head => {
    const arr = [];
    while (head) { arr.push(head.val); head = head.next; }
    return helper(0, arr.length - 1);
    function helper(left, right) {
      if (left > right) return null;
      const mid = left + Math.floor((right - left) / 2);
      const node = new TreeNode(arr[mid]);
      node.left = helper(left, mid - 1);
      node.right = helper(mid + 1, right);
      return node;
    }
  };