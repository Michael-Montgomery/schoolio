let utilities = {
    returnPercentSuffix: function (value) {
        switch (String(value).slice(-1)) {
            case '1':
                return 'st';
            case '2':
                return 'nd';
            case '3':
                return 'rd';
            default:
                return 'th';
        }
    }
}

export default utilities;