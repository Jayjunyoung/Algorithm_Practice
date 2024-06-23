function solution(clothes) {
    let combiClothes = {};
    let answer = 1; 
    clothes.forEach((cloth, index) => {
        const [type, name] = cloth;
        if(combiClothes.hasOwnProperty(name)) {
            combiClothes[name]++
        }
        else {
            combiClothes[name] = 1;
        }
    })
    
    for (let item in combiClothes) {
        answer *= combiClothes[item] + 1;
    }
    
    return answer - 1;
}