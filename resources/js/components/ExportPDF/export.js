export function GenerateData(data){
    var result = [];
    for (var i = 0; i < data.length; i += 1) {
        data[i].id = (i + 1).toString();
        result.push(Object.assign({}, data[i]));
    }
    return result;
    
}

export function CreateHeaders(keys){
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
        result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
        });
    }
    return result;
}