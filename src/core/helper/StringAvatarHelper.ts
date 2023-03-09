function stringToColor(string: string) {
    let hash = 0;
    let i;


    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

const StringAvatarHelper = (name: string) => {
    return {
        sx: {
            bgcolor: `${stringToColor(name)}33`,
            color: stringToColor(name),
            fontSize: '11px',
            fontWeight: 600
        },
        children: name.split(' ')[1] ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name.split(' ')[0][0]}`
    };
};

export default StringAvatarHelper;


