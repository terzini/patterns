const RevealingModule = (function(){
    var _privateAge = undefined;

    const initAge = (value) => {
        console.log( '---Revealing: original initAge()')
        _privateAge = value;
    }

    const _setName = (value) => {
        _privateName = value;
    }

    const _getName = () => {
        return _privateName;
    }

    const _addAge = (value) => {
        // The private function __addAge refers to the public exposed function initAge
        // _addAge will always call the private (initial) implementation of initAge even if we override it outside 
        // This may lead to unexpected results
        initAge(0);
        _privateAge += value;
        return _privateAge;
    }

    return {
        initAge,
        addAge: _addAge
    }
})()

export default RevealingModule;
