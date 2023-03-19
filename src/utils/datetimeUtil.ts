//转为年月日
export const formatDate = (date: any) => {
    if (date != '' && date != undefined) {
        date = new Date(date)
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + ' 年' + m + '月' + d + '日';
    } else {
        return ''
    }
}
