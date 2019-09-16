class Technology {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    writeTechnology() {
        document.getElementById("myTechnology").innerHTML = this.name
            + " is a technology for " + this.type + " development.";
    }
}

class Framework extends Technology {
    constructor(name, type, library){
        super(name, type);
        this.library = library;
    }

    writeFramework(){
        document.getElementById("myFramework").innerHTML = this.library
            + " is extending " + this.name + " in a package for "
            + this.type + " development.";
    }
}

let javascript = new Technology('JavaScript', 'frontend');

let angular = new Framework('JavaScript', 'frontend', 'Angular');

javascript.writeTechnology();

angular.writeFramework();

