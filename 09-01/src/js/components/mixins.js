//默认属性 函数公用事件你可以放在这里
const MixinLog={
    //他也有自己的生命周期
    componentDidMount(){
console.log("MixiningLog componentDidMount");
    },
    log(){
        console.log("abcdefg...");
    }
};
export default MixinLog 