const numbers = [10, 3, 5, 15, 9 ];

const timer = function(nums) {
    for (const num of nums) {
        setTimeout(() => { 
            console.log(num)
            process.stdout.write('\x07');
        }, (num * 1000));
    }
}
timer(numbers);