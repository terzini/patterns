
const Receiver = (function(){
    var _items = [];

    return {
        add: (item) => {
           _items.push(item);
        },
        removeAt: (index) => {
            _items = _items.slice(0, index).concat(_items.slice(index + 1));
        },
        getAll: () => {
            console.log( "All items: ", _items );
            // return _items;
        }
    }
})();

export default Receiver;