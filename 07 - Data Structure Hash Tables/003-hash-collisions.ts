let user: { [key: string]: string | number | boolean | (() => void) } = {
    age: 54,
    name: 'Kylie',
    scream: function() {
        console.log('Aaaaaaaah!');
    }
}

user.age //O(1);
user.spell = "abra kadabra"; //O(1); 