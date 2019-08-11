webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weapons_weapon__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Created by SMITHE on 10-Feb-17.
 */
/**
 * Hero class
 */
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(id, name, attack, dodge, damage, hp, weapon) {
        _super.call(this, name || '');
        this._attack = Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this._dodge = Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this._damage = Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this._hp = Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this._id = id || Hero.generateUUID();
        this._name = name || '';
        this.attack = attack || Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this.dodge = dodge || Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this.damage = damage || Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this.hp = hp || Hero.MAX_SUM / __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES;
        this.weapon = weapon || null;
    }
    // ----------------------------------------------------------------------- BaseEntityWarfare implementation
    Hero.prototype.validateProperties = function () {
        return (this.sumProperties()) <= Hero.MAX_SUM;
    };
    Hero.prototype.checkProperty = function (nextValue, property) {
        if (nextValue < Hero.MIN_VALUE)
            throw new __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */](this, property, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].MESSAGES.MIN_VALUE);
        if (!this.validateProperties())
            throw new __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */](this, property);
    };
    Hero.prototype.getMaxValue = function () {
        return Hero.MAX_VALUE;
    };
    Hero.prototype.getMinValue = function () {
        return Hero.MIN_VALUE;
    };
    Hero.prototype.getMaxSum = function () {
        return Hero.MAX_SUM;
    };
    Hero.prototype.isHero = function () {
        return this instanceof Hero;
    };
    Hero.prototype.isWeapon = function () {
        return this instanceof __WEBPACK_IMPORTED_MODULE_2__weapons_weapon__["a" /* Weapon */];
    };
    Hero.prototype.serialize = function () {
        var superSerialized = _super.prototype.serialize.call(this);
        var w = new __WEBPACK_IMPORTED_MODULE_2__weapons_weapon__["a" /* Weapon */]();
        if (this.weapon)
            w.copyFrom(this.weapon);
        superSerialized.weapon = w.serialize();
        return superSerialized;
    };
    Hero.prototype.equal = function (entity) {
        return _super.prototype.equal.call(this, entity) && entity.weapon.equal(this.weapon);
    };
    Hero.prototype.copyFrom = function (entity) {
        _super.prototype.copyFrom.call(this, entity);
        this.weapon = entity.weapon;
    };
    Hero.prototype.getPerformanceIndex = function () {
        return (this.weapon)
            ? _super.prototype.getPerformanceIndex.call(this) - this.weapon.getPerformanceIndex() * Hero.RATIO_IMPACT_WEAPON_PERF_INDEX
            : _super.prototype.getPerformanceIndex.call(this);
    };
    Object.defineProperty(Hero.prototype, "name", {
        // ----------------------------------------------------------------------- GETTERS - Relative
        get: function () {
            return this._name;
        },
        // ----------------------------------------------------------------------- SETTERS
        set: function (value) {
            this._name = value;
            this.updatePic();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "attack", {
        get: function () {
            return this._attack;
        },
        set: function (value) {
            var oldValue = this._attack;
            this._attack = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.ATTACK);
            }
            catch (e) {
                this._attack = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "dodge", {
        get: function () {
            return this._dodge;
        },
        set: function (value) {
            var oldValue = this._dodge;
            this._dodge = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.DODGE);
            }
            catch (e) {
                this._dodge = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (value) {
            var oldValue = this._damage;
            this._damage = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.DAMAGE);
            }
            catch (e) {
                this._damage = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            var oldValue = this._hp;
            this._hp = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.HP);
            }
            catch (e) {
                this._hp = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        set: function (value) {
            this._weapon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "pic", {
        get: function () {
            return Hero.BASE_PATH_BIN + 'hero/' + (this._pic || 'Alley_Cat') + '.png';
        },
        enumerable: true,
        configurable: true
    });
    // ----------------------------------------------------------------------- GETTERS - Absolute
    Hero.prototype.getAbsoluteAttack = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.attack * coef;
    };
    Hero.prototype.getAbsoluteDodge = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.dodge * coef;
    };
    Hero.prototype.getAbsoluteDamage = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.damage * coef;
    };
    Hero.prototype.getAbsoluteHp = function () {
        return this.hp * __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.HP;
    };
    Hero.MAX_SUM = 40;
    Hero.MIN_VALUE = 1;
    Hero.MAX_VALUE = Hero.MAX_SUM;
    Hero.RATIO_IMPACT_WEAPON_PERF_INDEX = 0.3;
    return Hero;
}(__WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_hero__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weapon; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Created by emsm on 13/03/2017.
 */
/**
 * Weapon entity
 */
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(id, name, attack, dodge, damage, hp) {
        _super.call(this, name || '');
        this._attack = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this._dodge = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this._damage = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this._hp = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this._id = id || Weapon.generateUUID();
        this._name = name || '';
        this.attack = attack || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this.dodge = dodge || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this.damage = damage || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
        this.hp = hp || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
    }
    // ----------------------------------------------------------------------- BaseEntityWarfare implementation
    Weapon.prototype.validateProperties = function () {
        return this.sumProperties() === Weapon.SUM_PROPERTIES;
    };
    Weapon.prototype.checkProperty = function (nextValue, property) {
        if (nextValue < Weapon.MIN_VALUE)
            throw new __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */](this, property, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].MESSAGES.MIN_VALUE);
        if (nextValue > Weapon.MAX_VALUE)
            throw new __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */](this, property, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].MESSAGES.MAX_VALUE);
    };
    Weapon.prototype.getMaxValue = function () {
        return Weapon.MAX_VALUE;
    };
    Weapon.prototype.getMinValue = function () {
        return Weapon.MIN_VALUE;
    };
    Weapon.prototype.getMaxSum = function () {
        return Weapon.MAX_SUM;
    };
    Weapon.prototype.isHero = function () {
        return this instanceof __WEBPACK_IMPORTED_MODULE_2__heroes_hero__["a" /* Hero */];
    };
    Weapon.prototype.isWeapon = function () {
        return this instanceof Weapon;
    };
    Weapon.prototype.getPerformanceIndex = function () {
        return (Math.abs(this.getAbsoluteAttack()) + Math.abs(this.getAbsoluteDodge()) + Math.abs(this.getAbsoluteDamage()) + Math.abs(this.getAbsoluteHp()));
    };
    Object.defineProperty(Weapon.prototype, "name", {
        // ----------------------------------------------------------------------- GETTERS - Relative
        get: function () {
            return this._name;
        },
        // ----------------------------------------------------------------------- SETTERS
        set: function (value) {
            this._name = value;
            this.updatePic();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "attack", {
        get: function () {
            return this._attack;
        },
        set: function (value) {
            var oldValue = this._attack;
            this._attack = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.ATTACK);
            }
            catch (e) {
                this._attack = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "dodge", {
        get: function () {
            return this._dodge;
        },
        set: function (value) {
            var oldValue = this._dodge;
            this._dodge = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.DODGE);
            }
            catch (e) {
                this._dodge = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (value) {
            var oldValue = this._damage;
            this._damage = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.DAMAGE);
            }
            catch (e) {
                this._damage = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            var oldValue = this._hp;
            this._hp = value;
            try {
                this.checkProperty(value, __WEBPACK_IMPORTED_MODULE_1__commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.HP);
            }
            catch (e) {
                this._hp = oldValue;
                throw e;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "pic", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__heroes_hero__["a" /* Hero */].BASE_PATH_BIN + 'weapon/' + (this._pic || 'Apostle') + '.png';
        },
        enumerable: true,
        configurable: true
    });
    // ----------------------------------------------------------------------- GETTERS - Absolute
    Weapon.prototype.getAbsoluteAttack = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.attack * coef;
    };
    Weapon.prototype.getAbsoluteDodge = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.dodge * coef;
    };
    Weapon.prototype.getAbsoluteDamage = function (de) {
        var coef = de || __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
        return this.damage * coef;
    };
    Weapon.prototype.getAbsoluteHp = function () {
        return this.hp * __WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].COEF_RELATIVE_TO_ABSOLUTE.HP;
    };
    Weapon.MIN_VALUE = -5;
    Weapon.MAX_VALUE = 5;
    Weapon.MAX_SUM = 40;
    Weapon.SUM_PROPERTIES = 0;
    return Weapon;
}(__WEBPACK_IMPORTED_MODULE_0__commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnexpectedWarfareEntityProperty; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by SMITHE on 13-Mar-17.
 */
/**
 *  Exception thrown if an entity have invalid properties
 */
var UnexpectedWarfareEntityProperty = (function (_super) {
    __extends(UnexpectedWarfareEntityProperty, _super);
    /**
     *  Constructor of UnexpectedWarfareEntityProperty
     *
     * @param entity Entity engaged
     * @param property Property engaged
     * @param message Message to show
     */
    function UnexpectedWarfareEntityProperty(entity, property, message) {
        if (message === void 0) { message = UnexpectedWarfareEntityProperty.MESSAGES.MAX_SUM; }
        _super.call(this, UnexpectedWarfareEntityProperty.ERR_NAME);
        this.name = UnexpectedWarfareEntityProperty.ERR_NAME;
        this.message = UnexpectedWarfareEntityProperty.ERR_NAME + ' for (' + property + ') ' + message;
        this.message += (message === UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE)
            ? entity.getMinValue().toString()
            : entity.getMaxValue().toString();
    }
    /**
     * @type {string} Name of exception
     */
    UnexpectedWarfareEntityProperty.ERR_NAME = "Unexpected Entity Property";
    /**
     * @type {any} Message to show
     */
    UnexpectedWarfareEntityProperty.MESSAGES = {
        MIN_VALUE: ': Min value of properties ( Attack, Dodge, Damage & HP ) must be > ',
        MAX_VALUE: ': Max value of properties ( Attack, Dodge, Damage & HP ) must be <= ',
        MAX_SUM: ': Max sum of properties ( Attack, Dodge, Damage & HP ) must be <= ',
    };
    /**
     * @type {any} Property engaged in exception
     */
    UnexpectedWarfareEntityProperty.PROPERTIES = {
        ATTACK: 'Attack',
        DODGE: 'Dodge',
        DAMAGE: 'Damage',
        HP: 'HP',
        ANY: 'Any'
    };
    return UnexpectedWarfareEntityProperty;
}(Error));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/base-entity-warfare-exception.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_entity__ = __webpack_require__(580);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEntityWarfare; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Created by SMITHE on 13-Mar-17.
 */
/**
 * Base use for warfare entities
 */
var BaseEntityWarfare = (function (_super) {
    __extends(BaseEntityWarfare, _super);
    // ----------------------------------------------------------------------- BaseEntity implementation
    function BaseEntityWarfare(name) {
        _super.call(this);
        this.name = name;
    }
    BaseEntityWarfare.prototype.copyFrom = function (entity) {
        this._attack = 0;
        this._dodge = 0;
        this._damage = 0;
        this._hp = 0;
        this.id = entity.id;
        this.name = entity.name;
        this.attack = entity.attack;
        this.dodge = entity.dodge;
        this.damage = entity.damage;
        this.hp = entity.hp;
    };
    BaseEntityWarfare.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            attack: this.attack,
            dodge: this.dodge,
            damage: this.damage,
            hp: this.hp,
            pic: this.pic
        };
    };
    BaseEntityWarfare.prototype.equal = function (entity) {
        return this.id === entity.id &&
            this.name === entity.name &&
            this.attack === entity.attack &&
            this.dodge === entity.dodge &&
            this.damage === entity.damage &&
            this.hp === entity.hp &&
            this.pic === entity.pic;
    };
    /**
     * Get sum of properties
     *
     * @returns {number} Sum of properties
     */
    BaseEntityWarfare.prototype.sumProperties = function () {
        return this._attack + this._dodge + this._damage + this._hp;
    };
    /**
     *  Get performance index of entity ( Number to evaluate the performance of entity )
     *
     * @returns {number} Performance index
     */
    BaseEntityWarfare.prototype.getPerformanceIndex = function () {
        return (this.getAbsoluteAttack() + this.getAbsoluteDodge() + this.getAbsoluteDamage() + this.getAbsoluteHp()) / BaseEntityWarfare.NB_PROPERTIES;
    };
    /**
     * Update pic with the current name of entity
     */
    BaseEntityWarfare.prototype.updatePic = function () {
        this._pic = this.name.replace(/\s/g, '_');
    };
    Object.defineProperty(BaseEntityWarfare.prototype, "name", {
        // ----------------------------------------------------------------------- GETTERS - Relative
        get: function () { },
        // ----------------------------------------------------------------------- SETTERS
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEntityWarfare.prototype, "attack", {
        get: function () { },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEntityWarfare.prototype, "dodge", {
        get: function () { },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEntityWarfare.prototype, "damage", {
        get: function () { },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEntityWarfare.prototype, "hp", {
        get: function () { },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEntityWarfare.prototype, "pic", {
        get: function () { },
        enumerable: true,
        configurable: true
    });
    /**
     * @type {number} Number of properties
     */
    BaseEntityWarfare.NB_PROPERTIES = 4;
    /**
     * @type {string} Path to binaries (Warfare pictures)
     */
    BaseEntityWarfare.BASE_PATH_BIN = '../bin/';
    /**
     * @type {any} Coef use for process performance index
     */
    BaseEntityWarfare.COEF_RELATIVE_TO_ABSOLUTE = {
        ANY: {
            MIN: 1,
            MAX: 3
        },
        HP: 10
    };
    return BaseEntityWarfare;
}(__WEBPACK_IMPORTED_MODULE_0__base_entity__["a" /* BaseEntity */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/base-entity-warfare.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    /**
     *  Search in list of entity
     * @param list List where do the search
     * @param key Property of entity
     * @param search Term to search
     * @returns {BaseEntityWarfare[]|Array} Entity match with search and property
     */
    SearchFilterPipe.prototype.transform = function (list, key, search) {
        return (list)
            ? list.filter(function (item) {
                if (item.hasOwnProperty(key) || item.hasOwnProperty('_' + key)) {
                    if (search) {
                        var regExp = new RegExp('\\b' + search, 'gi');
                        return regExp.test(item[key]);
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return false;
                }
            })
            : [];
    };
    SearchFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'searchFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/searchFilter.pipe.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_base_form__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_warfareEntities_base_entity_warfare_exception__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFormComponent; });
/**
 * Created by emsm on 12/03/2017.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroFormComponent = (function (_super) {
    __extends(HeroFormComponent, _super);
    // ----------------------------------------------------------------------- BaseEntityWarfare implementation
    function HeroFormComponent(fb, _weaponService) {
        var _this = this;
        _super.call(this);
        this._weaponService = _weaponService;
        this.entity = new __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__["a" /* Hero */]();
        this._weaponService
            .getWeapons()
            .then(function (weapons) { return _this.weapons = weapons; });
        this.buildForm(fb);
        this.form
            .valueChanges
            .map(function (value) {
            _this.onChangeEntity(value);
            return value;
        })
            .subscribe(function (value) {
            return value;
        });
    }
    HeroFormComponent.prototype.init = function (hero) {
        this.entity = new __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__["a" /* Hero */]();
        this.entity.copyFrom(hero);
        this.entityBack = new __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__["a" /* Hero */]();
        this.entityBack.copyFrom(hero);
        this.updateForm();
    };
    HeroFormComponent.prototype.buildForm = function (fb) {
        this.form = fb.group({
            name: [this.entity.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            pic: [],
            weapon: [__WEBPACK_IMPORTED_MODULE_5__services_weapon_service__["a" /* WeaponService */].jsonStringify(this.entity.weapon), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            attack: [this.entity.attack, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            dodge: [this.entity.dodge, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            damage: [this.entity.damage, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            hp: [this.entity.hp, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    HeroFormComponent.prototype.updateForm = function () {
        console.log('Update', this.entity.attack, this.entity.dodge, this.entity.damage, this.entity.hp, this.entity.weapon);
        this.form.patchValue({
            name: this.entity.name,
            weapon: __WEBPACK_IMPORTED_MODULE_5__services_weapon_service__["a" /* WeaponService */].jsonStringify(this.entity.weapon),
            attack: this.entity.attack,
            dodge: this.entity.dodge,
            damage: this.entity.damage,
            hp: this.entity.hp
        });
    };
    HeroFormComponent.prototype.onChangeEntity = function (value) {
        try {
            this.entity.name = value.name;
            this.entity.attack = value.attack;
            this.entity.dodge = value.dodge;
            this.entity.damage = value.damage;
            this.entity.hp = value.hp;
            this.entity.weapon = this._weaponService.makeObject(__WEBPACK_IMPORTED_MODULE_5__services_weapon_service__["a" /* WeaponService */].jsonParse(value.weapon));
        }
        catch (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_3__components_commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */]) {
                this.feedback = {
                    asError: true,
                    type: 'warning',
                    message: e.message
                };
                this.updateForm();
            }
        }
    };
    // ----------------------------------------------------------------------- HeroFormComponent methods
    /**
     * Calculate remaining points to assign to hero
     *
     * @returns {number} Remaining points to assign
     */
    HeroFormComponent.prototype.remainingPoints = function () {
        return __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__["a" /* Hero */].MAX_SUM - this.entity.sumProperties();
    };
    HeroFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero-form',
            template: __webpack_require__(439),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_weapon_service__["a" /* WeaponService */]) === 'function' && _b) || Object])
    ], HeroFormComponent);
    return HeroFormComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__components_commons_base_form__["a" /* BaseFormComponent */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero-form.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_base_form__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_warfareEntities_base_entity_warfare__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_commons_warfareEntities_base_entity_warfare_exception__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponFormComponent; });
/**
 * Created by emsm on 12/03/2017.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeaponFormComponent = (function (_super) {
    __extends(WeaponFormComponent, _super);
    // ----------------------------------------------------------------------- BaseEntityWarfare implementation
    function WeaponFormComponent(fb) {
        var _this = this;
        _super.call(this);
        this.entity = new __WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__["a" /* Weapon */]();
        this.buildForm(fb);
        this.form
            .valueChanges
            .map(function (value) {
            _this.onChangeEntity(value);
            return value;
        })
            .subscribe(function (value) {
            return value;
        });
    }
    WeaponFormComponent.prototype.init = function (weapon) {
        this.entity = new __WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__["a" /* Weapon */]();
        this.entity.copyFrom(weapon);
        this.entityBack = new __WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__["a" /* Weapon */]();
        this.entityBack.copyFrom(weapon);
        this.updateForm();
    };
    WeaponFormComponent.prototype.buildForm = function (fb) {
        this.form = fb.group({
            name: [this.entity.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            pic: [],
            attack: [this.entity.attack, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            dodge: [this.entity.dodge, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            damage: [this.entity.damage, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            hp: [this.entity.hp, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    WeaponFormComponent.prototype.updateForm = function () {
        console.log('Update', this.entity.attack, this.entity.dodge, this.entity.damage, this.entity.hp);
        this.form.patchValue({
            name: this.entity.name,
            attack: this.entity.attack,
            dodge: this.entity.dodge,
            damage: this.entity.damage,
            hp: this.entity.hp
        });
    };
    WeaponFormComponent.prototype.onChangeEntity = function (value) {
        try {
            this.entity.name = value.name;
            this.entity.attack = value.attack;
            this.entity.dodge = value.dodge;
            this.entity.damage = value.damage;
            this.entity.hp = value.hp;
        }
        catch (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_4__components_commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */]) {
                this.feedback = {
                    asError: true,
                    type: 'warning',
                    message: e.message
                };
                this.updateForm();
            }
        }
    };
    WeaponFormComponent.prototype.validate = function () {
        try {
            if (!this.entity.validateProperties())
                throw new __WEBPACK_IMPORTED_MODULE_4__components_commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */](this.entity, __WEBPACK_IMPORTED_MODULE_4__components_commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */].PROPERTIES.ANY);
            _super.prototype.validate.call(this);
        }
        catch (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_4__components_commons_warfareEntities_base_entity_warfare_exception__["a" /* UnexpectedWarfareEntityProperty */]) {
                this.feedback = {
                    asError: true,
                    type: 'warning',
                    message: e.message
                };
                this.updateForm();
            }
        }
    };
    // ----------------------------------------------------------------------- HeroFormComponent methods
    /**
     * Calculate remaining points to assign to weapon
     *
     * @returns {number} Remaining points to assign
     */
    WeaponFormComponent.prototype.remainingPoints = function () {
        return (((Math.abs(__WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__["a" /* Weapon */].MIN_VALUE) + Math.abs(__WEBPACK_IMPORTED_MODULE_5__components_weapons_weapon__["a" /* Weapon */].MAX_VALUE)) * __WEBPACK_IMPORTED_MODULE_3__components_commons_warfareEntities_base_entity_warfare__["a" /* BaseEntityWarfare */].NB_PROPERTIES) / 2)
            - Math.abs(this.entity.attack)
            - Math.abs(this.entity.dodge)
            - Math.abs(this.entity.damage)
            - Math.abs(this.entity.hp);
    };
    WeaponFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'weapon-form',
            template: __webpack_require__(439),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object])
    ], WeaponFormComponent);
    return WeaponFormComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__components_commons_base_form__["a" /* BaseFormComponent */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon-form.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by SMITHE on 13-Mar-17.
 */
/**
 *  Class for manage form of entity with check inside (Throw exception)
 */
var BaseFormComponent = (function () {
    function BaseFormComponent() {
        this.feedback = {
            asError: false,
            type: 'error',
            message: ''
        };
        /**
         * Object to pass data through an event
         *
         * @type {EventEmitter}
         */
        this.onValidate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    /**
     * Reset current class entity with old entity
     */
    BaseFormComponent.prototype.reset = function () {
        this.init(this.entityBack);
    };
    /**
     *  Call in submit form. Emit event with form entity
     */
    BaseFormComponent.prototype.validate = function () {
        this.onValidate.emit(this.entity);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], BaseFormComponent.prototype, "onValidate", void 0);
    return BaseFormComponent;
    var _a;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/base-form.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });



/**
 * Class use by all services. Provide commons method to interact with a REST API
 */
var BaseService = (function () {
    /**
     *
     * @param _http
     */
    function BaseService(_http) {
        this._http = _http;
        /**
         *  Common header sent in each request
         *
         * @type {Headers}
         */
        this._headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this._addEntityEvent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._deleteEntityEvent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        /**
         * Observable to announce new entity added
         *
         * @type {Observable<T>}
         */
        this.addEntityEvent$ = this._addEntityEvent.asObservable();
        /**
         * Observable to announce new entity removing
         *
         * @type {Observable<T>}
         */
        this.deleteEntityEvent$ = this._deleteEntityEvent.asObservable();
    }
    // ----------------------------------------------------------------------- REST METHODS
    /**
     * Method to execute GET request
     *
     * @param {string} path Resource URL
     * @param callback Function call after the request processing
     * @returns {Promise<T>}
     */
    BaseService.prototype.get = function (path, callback) {
        var ob = this._http.get(path);
        return this.process(ob, callback);
    };
    /**
     * Method to execute PUT request
     *
     * @param {string} path Resource URL
     * @param data Datas to pass with request
     * @param callback Function call after the request processing
     * @returns {Promise<T>}
     */
    BaseService.prototype.put = function (path, data, callback) {
        var ob = this._http.put(path, data, { headers: this._headers });
        return this.process(ob, callback);
    };
    /**
     * Method to execute POST request
     *
     * @param {string} path Resource URL
     * @param data Datas to pass with request
     * @param callback Function call after the request processing
     * @returns {Promise<T>}
     */
    BaseService.prototype.post = function (path, data, callback) {
        var ob = this._http.post(path, data, { headers: this._headers });
        return this.process(ob, callback);
    };
    /**
     * Method to execute DELETE request
     *
     * @param {string} path Resource URL
     * @param callback Function call after the request processing
     * @returns {Promise<void>}
     */
    BaseService.prototype.remove = function (path, callback) {
        var ob = this._http.delete(path, { headers: this._headers });
        return this.process(ob, callback);
    };
    // ----------------------------------------------------------------------- CLASS METHODS
    /**
     * Emit new event for announce adding Entity
     *
     * @param {T} entity Entity added
     */
    BaseService.prototype.announceNewEntity = function (entity) {
        console.warn(entity);
        this._addEntityEvent.next(entity);
    };
    /**
     * Emit new event for announce removing Entity
     *
     * @param {T} entity Entity removed
     */
    BaseService.prototype.announceDeleteEntity = function (entity) {
        this._deleteEntityEvent.next(entity);
    };
    /**
     * Get the relative path of current service
     *
     * @returns {string} Relative path
     * @constructor
     */
    BaseService.prototype.BASE_PATH_ENTITY = function () {
        return BaseService.BASE_PATH;
    };
    /**
     * Convert observable & call callback
     *
     * @param observable Observable of request
     * @param callback Function call after the request processing
     * @returns {Promise<T|void>}
     */
    BaseService.prototype.process = function (observable, callback) {
        return observable
            .toPromise()
            .then(callback)
            .catch(this.handleError);
    };
    /**
     * Handle error in request
     *
     * @param error Error handled
     * @returns {Promise<never>}
     */
    BaseService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Base URL of API
     *
     * @type {string}
     */
    BaseService.BASE_PATH = 'api';
    return BaseService;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/base-service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_commons_base_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_weapons_weapon__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 *  Weapon service
 */
var WeaponService = (function (_super) {
    __extends(WeaponService, _super);
    function WeaponService(_http) {
        _super.call(this, _http);
    }
    WeaponService.prototype.BASE_PATH_ENTITY = function () {
        return _super.prototype.BASE_PATH_ENTITY.call(this) + '/weapons';
    };
    // ----------------------------------------------------------------------- REST Method
    /**
     * Get weapons
     *
     * @returns {Promise<Weapon[]>} List of Weapon
     */
    WeaponService.prototype.getWeapons = function () {
        var path = this.BASE_PATH_ENTITY();
        var callback = function (response) { return response.json().data; };
        return this.get(path, callback);
    };
    /**
     * Get specific weapon
     *
     * @param id ID of weapon
     * @returns {Promise<Weapon>} Weapon
     */
    WeaponService.prototype.getWeapon = function (id) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + id;
        var callback = function (response) { return _this.makeObject(response.json().data); };
        return this.get(path, callback);
    };
    /**
     * Update weapon
     *
     * @param weapon Weapon to update
     * @returns {Promise<Weapon>} Weapon updated
     */
    WeaponService.prototype.putWeapon = function (weapon) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + weapon.id;
        var callback = function () {
            _this.announceNewEntity(weapon);
            return _this.makeObject(weapon);
        };
        return this.put(path, weapon.serialize(), callback);
    };
    /**
     * Add weapon
     *
     * @param weapon Weapon to add
     * @returns {Promise<Weapon>} Weapon added
     */
    WeaponService.prototype.postWeapon = function (weapon) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + weapon.id;
        var callback = function (res) {
            _this.announceNewEntity(weapon);
            return _this.makeObject(res.json().data);
        };
        return this.post(path, weapon.serialize(), callback);
    };
    /**
     *  Weapon to remove
     *
     * @param weapon Weapon to remove
     * @returns {Promise<void>}
     */
    WeaponService.prototype.deleteWeapon = function (weapon) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + weapon.id;
        var callback = function () { return _this.announceDeleteEntity(weapon); };
        return this.remove(path, callback);
    };
    /**
     *  Search weapon with params
     *
     * @param property Property  where do the search
     * @param value Term to search
     * @returns {Promise<any>} List of Heroes corresponding to the search
     */
    WeaponService.prototype.search = function (property, value) {
        var path = this.BASE_PATH_ENTITY() + '/?' + property + '=^' + (Number(value) || value);
        var callback = function (response) { return response.json().data; };
        return this.get(path, callback);
    };
    // ----------------------------------------------------------------------- SERVICE Method
    /**
     * Create a TRUE Hero object
     *
     * @param weapon Object to convert
     * @returns {Weapon} TRUE Hero object
     */
    WeaponService.prototype.makeObject = function (weapon) {
        var w = new __WEBPACK_IMPORTED_MODULE_3__components_weapons_weapon__["a" /* Weapon */]();
        w.copyFrom(weapon);
        return w;
    };
    /**
     *  Stringify weapon
     *
     * @param weapon Weapon to stringify
     * @returns {any} Weapon stringified
     */
    WeaponService.jsonStringify = function (weapon) {
        if (!weapon)
            return null;
        var w = new __WEBPACK_IMPORTED_MODULE_3__components_weapons_weapon__["a" /* Weapon */]();
        w.copyFrom(weapon);
        return JSON.stringify(w.serialize());
    };
    /**
     *  Parse string of weapon to object
     *
     * @param weapon String of weapon
     * @returns {Weapon} Object weapon
     */
    WeaponService.jsonParse = function (weapon) {
        return JSON.parse(weapon);
    };
    WeaponService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], WeaponService);
    return WeaponService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__components_commons_base_service__["a" /* BaseService */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon.service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<warfare-entity-header [entity]=\"entity\" [options]=\"{ actionBtn: false }\" ></warfare-entity-header >\n\n<form [formGroup]=\"form\" class=\"container col-xs-12 col-md-8 col-md-offset-4\" flatizer-label-form >\n\t<div class=\"alert alert-{{ feedback.type }} alert-dismissible fade show\" role=\"alert\" *ngIf=\"feedback.asError\" >\n\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" >\n\t\t\t<span aria-hidden=\"true\" >&times;</span >\n\t\t</button >\n\t\t{{ feedback.message }}\n\t</div >\n\t\n\t<div >Remaning points: {{ remainingPoints() }}</div >\n\t\n\t<div class=\"form-group\" >\n\t\t<label for=\"entity_name\" >Name</label >\n\t\t<input type=\"text\" class=\"form-control\" name=\"name\" id=\"entity_name\" formControlName=\"name\" >\n\t</div >\n\t\n\t<div class=\"form-group\">\n\t\t<label for=\"entity_name\">Pic</label>\n\t\t<input type=\"file\" class=\"form-control\" name=\"pic\" id=\"entity_pic\" formControlName=\"pic\" disabled>\n\t</div>\n\t\n\t<div class=\"form-group\" *ngIf=\"entity.isHero()\" >\n\t\t<label for=\"entity_type\" >Weapon</label >\n\t\t<select name=\"type\" id=\"entity_type\" formControlName=\"weapon\" class=\"form-control\" >\n\t\t\t<option *ngFor=\"let weapon of weapons\" value=\"{{ weapon | srzWeapon }}\" >{{ weapon.name }}</option >\n\t\t</select >\n\t</div >\n\t\n\t<div class=\"form-group\" >\n\t\t<label for=\"entity_attack\" >Attack</label >\n\t\t<input type=\"number\" class=\"form-control\" step=\"1\" min=\"{{ entity.getMinValue() }}\" max=\"{{ entity.getMaxValue() }}\" name=\"attack\" id=\"entity_attack\" formControlName=\"attack\" >\n\t</div >\n\t\n\t<div class=\"form-group\" >\n\t\t<label for=\"entity_dodge\" >Dodge</label >\n\t\t<input type=\"number\" class=\"form-control\" step=\"1\" min=\"{{ entity.getMinValue() }}\" max=\"{{ entity.getMaxValue() }}\" name=\"dodge\" id=\"entity_dodge\" formControlName=\"dodge\" >\n\t</div >\n\t\n\t<div class=\"form-group\" >\n\t\t<label for=\"entity_damage\" >Damage</label >\n\t\t<input type=\"number\" class=\"form-control\" step=\"1\" min=\"{{ entity.getMinValue() }}\" max=\"{{ entity.getMaxValue() }}\" name=\"damage\" id=\"entity_damage\" formControlName=\"damage\" >\n\t</div >\n\t\n\t<div class=\"form-group\" >\n\t\t<label for=\"entity_hp\" >HP</label >\n\t\t<input type=\"number\" class=\"form-control\" step=\"1\" min=\"{{ entity.getMinValue() }}\" max=\"{{ entity.getMaxValue() }}\" name=\"hp\" id=\"entity_hp\" formControlName=\"hp\" >\n\t</div >\n\t\n\t<button type=\"button\" (click)=\"reset()\" class=\"btn btn-outline-info\" >Cancel</button >\n\t<button type=\"submit\" (click)=\"validate()\" class=\"btn btn-outline-primary\" >Submit</button >\n</form >"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<hero-form (onValidate)=\"validate( $event )\" ></hero-form >"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<weapon-form (onValidate)=\"validate( $event )\" ></weapon-form >"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 467;


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(579);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/main.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(784)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/app.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tooltip__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ui_router_ng2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_commons_warfareEntities_warfare_entity_header_warfare_entity_header__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_heroes_hero_crud_hero_edit__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_heroes_hero_crud_hero_new__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_weapons_weapon_crud_weapon_edit__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_weapons_weapon_crud_weapon_new__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_flatizer_label_form_directive__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_limit_pipe__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_searchFilter_pipe__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_weapon_serializer_pipe__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_hero_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_InMemoryDbService_service__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_weapon_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_filtering_filtering_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_hero_hero_details_hero_details_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_hero_hero_form_hero_form__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_weapon_weapon_form_weapon_form__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_weapon_weapons_details_weapon_details_component__ = __webpack_require__(594);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























/**
 *  ROUTING
 *  2 views:
 *    - Left menu : List of entity + filtering by name
 *    - Content: Main view
 *
 *  Each views use one component
 */
var routes = [
    // ---------------------------------------------------- FILTERING
    {
        name: 'filtering', url: '/',
        views: {
            content: { component: __WEBPACK_IMPORTED_MODULE_20__views_filtering_filtering_component__["a" /* FilteringComponent */] },
        }
    },
    // ---------------------------------------------------- HEROES
    // HeroHome:  /heroes/list
    {
        name: 'heroes', url: '/heroes',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__["a" /* HeroListComponent */] }
        }
    },
    // HeroNew:  /heroes/new
    {
        name: 'heroes_new', url: '/heroes/new',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__["a" /* HeroListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_10__components_heroes_hero_crud_hero_new__["a" /* HeroNewComponent */] },
        }
    },
    // HeroEdit:  /heroes/{id:string}/edit
    {
        name: 'heroes_edit', url: '/heroes/{id:string}/edit',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__["a" /* HeroListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_9__components_heroes_hero_crud_hero_edit__["a" /* HeroEditComponent */] },
        }
    },
    // HeroShow:  /heroes/{id:string}
    {
        name: 'heroes_show', url: '/heroes/{id:string}/',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__["a" /* HeroListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_21__views_hero_hero_details_hero_details_component__["a" /* HeroDetailsComponent */] },
        }
    },
    // ---------------------------------------------------- WEAPONS
    // WeaponHome: /weapons
    {
        name: 'weapons', url: '/weapons',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__["a" /* WeaponListComponent */] }
        }
    },
    // WeaponNew:  /weapons/new
    {
        name: 'weapons_new', url: '/weapons/new',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__["a" /* WeaponListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_12__components_weapons_weapon_crud_weapon_new__["a" /* WeaponNewComponent */] },
        }
    },
    // WeaponEdit:  /weapons/{id:string}/edit
    {
        name: 'weapons_edit', url: '/weapons/{id:string}/edit',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__["a" /* WeaponListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_11__components_weapons_weapon_crud_weapon_edit__["a" /* WeaponEditComponent */] },
        }
    },
    // WeaponShow:  /weapons/{id:string}
    {
        name: 'weapons_show', url: '/weapons/{id:string}/',
        views: {
            subMenu: { component: __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__["a" /* WeaponListComponent */] },
            content: { component: __WEBPACK_IMPORTED_MODULE_26__views_weapon_weapons_details_weapon_details_component__["a" /* WeaponDetailsComponent */] },
        }
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_commons_warfareEntities_warfare_entity_header_warfare_entity_header__["a" /* WarfareEntityHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_flatizer_label_form_directive__["a" /* FlatizerLabelFormDirective */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_searchFilter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_23__views_hero_hero_list_hero_list_componenrt__["a" /* HeroListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_hero_hero_details_hero_details_component__["a" /* HeroDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_heroes_hero_crud_hero_edit__["a" /* HeroEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_heroes_hero_crud_hero_new__["a" /* HeroNewComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */],
                __WEBPACK_IMPORTED_MODULE_25__views_weapon_weapon_list_weapon_list_componenrt__["a" /* WeaponListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__views_weapon_weapons_details_weapon_details_component__["a" /* WeaponDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_weapons_weapon_crud_weapon_edit__["a" /* WeaponEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_weapons_weapon_crud_weapon_new__["a" /* WeaponNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_weapon_serializer_pipe__["a" /* WeaponSerializedPipe */],
                __WEBPACK_IMPORTED_MODULE_20__views_filtering_filtering_component__["a" /* FilteringComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_limit_pipe__["a" /* LimitPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ui_router_ng2__["UIRouterModule"].forRoot({ states: routes, useHash: true }),
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__services_InMemoryDbService_service__["a" /* InMemoryDataService */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_19__services_weapon_service__["a" /* WeaponService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/app.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEntity; });
/**
 * Created by SMITHE on 13-Mar-17.
 */
/**
 * BaseEntity are an abstract class for all entity of project. It's created to provide TRUE object due to JavaScript limitation
 */
var BaseEntity = (function () {
    function BaseEntity() {
    }
    /**
     * Generate unique ID for entity. Will be remove with API interaction
     *
     * @returns {number} UUID
     */
    BaseEntity.generateUUID = function () {
        return Math.round(Math.random().valueOf() * (Math.pow(10, 16)))
            + Math.round(Math.random().valueOf() * (Math.pow(10, 16)));
    };
    Object.defineProperty(BaseEntity.prototype, "id", {
        // ----------------------------------------------------------------------- GETTERS & SETTERS
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseEntity;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/base-entity.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_entity_warfare__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarfareEntityHeaderComponent; });
/**
 * Created by emsm on 19/03/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarfareEntityHeaderComponent = (function () {
    function WarfareEntityHeaderComponent() {
        /**
         * Option to configure the component
         * @type {any}
         */
        this.options = {
            actionBtn: true,
            cardView: false
        };
        /**
         * Show absolute value or not of the current entity
         *
         * @type {boolean}
         */
        this.showAbsoluteValueProperties = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__base_entity_warfare__["a" /* BaseEntityWarfare */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__base_entity_warfare__["a" /* BaseEntityWarfare */]) === 'function' && _a) || Object)
    ], WarfareEntityHeaderComponent.prototype, "entity", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], WarfareEntityHeaderComponent.prototype, "options", void 0);
    WarfareEntityHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'warfare-entity-header',
            template: __webpack_require__(785),
        }), 
        __metadata('design:paramtypes', [])
    ], WarfareEntityHeaderComponent);
    return WarfareEntityHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/warfare-entity-header.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroEditComponent; });
/**
 * Created by SMITHE on 02-Mar-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroEditComponent = (function () {
    /**
     * Constructor
     *
     * @param _heroesService
     * @param trans Params pass in URL (See ui-router Angular2)
     */
    function HeroEditComponent(_heroesService, trans) {
        var _this = this;
        this._heroesService = _heroesService;
        this._heroesService
            .getHero(trans.params().id)
            .then(function (hero) {
            console.log('Init', trans.params().id, hero);
            _this.form.init(hero);
        });
    }
    /**
     *  Processing after submitted form
     *
     * @param hero Entity submitted
     */
    HeroEditComponent.prototype.validate = function (hero) {
        var _this = this;
        this._heroesService
            .announceDeleteEntity(this.form.entityBack);
        this._heroesService
            .putHero(hero)
            .then(function (_hero) {
            if (_this.form.entity.equal(_hero)) {
                _this.form.feedback = {
                    asError: true,
                    type: 'success',
                    message: 'Modification effectué avec succès'
                };
                _this.form.init(_hero);
            }
            else {
                _this.form.feedback = {
                    asError: true,
                    type: 'error',
                    message: 'Impossible de mettre à jour'
                };
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */]) === 'function' && _a) || Object)
    ], HeroEditComponent.prototype, "form", void 0);
    HeroEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero-edit',
            template: __webpack_require__(440),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"]) === 'function' && _c) || Object])
    ], HeroEditComponent);
    return HeroEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero-edit.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroNewComponent; });
/**
 * Created by emsm on 12/03/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroNewComponent = (function () {
    function HeroNewComponent(_heroesService) {
        this._heroesService = _heroesService;
    }
    /**
     * Initialize wub view form with entity
     */
    HeroNewComponent.prototype.ngAfterViewInit = function () {
        this.form.init(new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */]());
    };
    /**
     *  Processing after submitted form
     *
     * @param hero Entity submitted
     */
    HeroNewComponent.prototype.validate = function (hero) {
        var _this = this;
        this._heroesService
            .postHero(hero)
            .then(function (_hero) {
            if (_this.form.entity.equal(_hero)) {
                _this.form.feedback = {
                    asError: true,
                    type: 'success',
                    message: 'Ajout effectuée avec succès'
                };
                _this.form.init(_hero);
            }
            else {
                _this.form.feedback = {
                    asError: true,
                    type: 'error',
                    message: 'Impossible d\'ajouter'
                };
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__views_hero_hero_form_hero_form__["a" /* HeroFormComponent */]) === 'function' && _a) || Object)
    ], HeroNewComponent.prototype, "form", void 0);
    HeroNewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero-new',
            template: __webpack_require__(440),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */]) === 'function' && _b) || Object])
    ], HeroNewComponent);
    return HeroNewComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero-new.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponEditComponent; });
/**
 * Created by SMITHE on 02-Mar-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeaponEditComponent = (function () {
    /**
     * Constructor
     *
     * @param _weaponService
     * @param trans Params pass in URL (See ui-router Angular2)
     */
    function WeaponEditComponent(_weaponService, trans) {
        var _this = this;
        this._weaponService = _weaponService;
        this._weaponService
            .getWeapon(trans.params().id)
            .then(function (weapon) {
            console.log('Init', trans.params().id, weapon);
            _this.form.init(weapon);
        });
    }
    /**
     *  Processing after submitted form
     *
     * @param weapon Entity submitted
     */
    WeaponEditComponent.prototype.validate = function (weapon) {
        var _this = this;
        this._weaponService
            .announceDeleteEntity(this.form.entityBack);
        this._weaponService
            .putWeapon(weapon)
            .then(function (_weapon) {
            if (_this.form.entity.equal(_weapon)) {
                _this.form.feedback = {
                    asError: true,
                    type: 'success',
                    message: 'Modification effectué avec succès'
                };
                _this.form.init(_weapon);
            }
            else {
                _this.form.feedback = {
                    asError: true,
                    type: 'error',
                    message: 'Impossible de mettre à jour'
                };
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */]) === 'function' && _a) || Object)
    ], WeaponEditComponent.prototype, "form", void 0);
    WeaponEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'weapon-edit',
            template: __webpack_require__(441),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__["a" /* WeaponService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"]) === 'function' && _c) || Object])
    ], WeaponEditComponent);
    return WeaponEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon-edit.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weapon__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponNewComponent; });
/**
 * Created by emsm on 12/03/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeaponNewComponent = (function () {
    function WeaponNewComponent(_weaponService) {
        this._weaponService = _weaponService;
    }
    /**
     * Initialize wub view form with entity
     */
    WeaponNewComponent.prototype.ngAfterViewInit = function () {
        this.form.init(new __WEBPACK_IMPORTED_MODULE_1__weapon__["a" /* Weapon */]());
    };
    /**
     *  Processing after submitted form
     *
     * @param weapon Entity submitted
     */
    WeaponNewComponent.prototype.validate = function (weapon) {
        var _this = this;
        this._weaponService
            .postWeapon(weapon)
            .then(function (_weapon) {
            console.log(_weapon, weapon);
            if (_this.form.entity.equal(_weapon)) {
                _this.form.feedback = {
                    asError: true,
                    type: 'success',
                    message: 'Ajout effectuée avec succès'
                };
                _this.form.init(_weapon);
            }
            else {
                _this.form.feedback = {
                    asError: true,
                    type: 'error',
                    message: 'Impossible d\'ajouter'
                };
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__views_weapon_weapon_form_weapon_form__["a" /* WeaponFormComponent */]) === 'function' && _a) || Object)
    ], WeaponNewComponent.prototype, "form", void 0);
    WeaponNewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'weapon-new',
            template: __webpack_require__(441),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_weapon_service__["a" /* WeaponService */]) === 'function' && _b) || Object])
    ], WeaponNewComponent);
    return WeaponNewComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon-new.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatizerLabelFormDirective; });
/**
 * Created by emsm on 19/03/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlatizerLabelFormDirective = (function () {
    function FlatizerLabelFormDirective(_el) {
        this._el = _el;
        console.log(this._el);
    }
    /**
     * Code to execute when app are ready
     */
    FlatizerLabelFormDirective.prototype.ngAfterViewInit = function () {
        $('.form-control')
            .focus(function () {
            $(this)
                .parents('.form-group')
                .find('label')
                .addClass('moving focused');
        })
            .blur(function () {
            var label = $(this)
                .parents('.form-group')
                .find('label');
            if ($(this).val() === '')
                label.removeClass('moving focused');
            else
                label.removeClass('focused');
        })
            .each(labelToInitialPosition);
        function labelToInitialPosition(index, value) {
            console.log(index, $(this).val(), $(this).is(':empty'));
            if ($(this).val())
                $(this)
                    .parents('.form-group')
                    .find('label')
                    .addClass('moving');
        }
    };
    FlatizerLabelFormDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({ selector: '[flatizer-label-form]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], FlatizerLabelFormDirective);
    return FlatizerLabelFormDirective;
    var _a;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/flatizer-label-form.directive.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LimitPipe = (function () {
    function LimitPipe() {
    }
    /**
     * List shortened to max number of entity
     *
     * @param list List to short
     * @param max Max number of entity
     * @returns {any[]} List shortened to max number of entity
     */
    LimitPipe.prototype.transform = function (list, max) {
        return list.slice(0, max);
    };
    LimitPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'limit'
        }), 
        __metadata('design:paramtypes', [])
    ], LimitPipe);
    return LimitPipe;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/limit.pipe.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponSerializedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by SMITHE on 17-Mar-17.
 */
var WeaponSerializedPipe = (function () {
    function WeaponSerializedPipe() {
    }
    /**
     * Serialized weapon
     *
     * @param weapon Weapon to serialize
     * @returns {string} Weapon serialized
     */
    WeaponSerializedPipe.prototype.transform = function (weapon) {
        return __WEBPACK_IMPORTED_MODULE_1__services_weapon_service__["a" /* WeaponService */].jsonStringify(weapon);
    };
    WeaponSerializedPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'srzWeapon' }), 
        __metadata('design:paramtypes', [])
    ], WeaponSerializedPipe);
    return WeaponSerializedPipe;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon.serializer.pipe.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/**
 * In memory service
 */
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        // --------------------------------------------------------------------- Heroes
        var heroes = [
            {
                id: 1, name: 'Snow Raven', attack: 9, dodge: 20, damage: 1, hp: 10,
                weapon: { id: 1, name: 'Glinting Vessel', attack: -5, dodge: 5, damage: 1, hp: -1 }
            },
            { id: 2, name: 'Water Bat', attack: 8, dodge: 19, damage: 2, hp: 9 },
            { id: 3, name: 'Dazzler', attack: 7, dodge: 18, damage: 3, hp: 8 },
            { id: 4, name: 'Light Antman', attack: 6, dodge: 17, damage: 4, hp: 7 },
            { id: 5, name: 'Alley Cat', attack: 5, dodge: 16, damage: 5, hp: 6 },
            { id: 6, name: 'Crusher', attack: 4, dodge: 15, damage: 6, hp: 5 },
            { id: 7, name: 'Bolt', attack: 3, dodge: 14, damage: 7, hp: 4 },
            { id: 8, name: 'Blue Falcon', attack: 2, dodge: 13, damage: 8, hp: 3 },
            { id: 9, name: 'Scarlet Monarch', attack: 1, dodge: 12, damage: 9, hp: 2 },
            { id: 10, name: 'Starlight', attack: 1, dodge: 11, damage: 10, hp: 1 }
        ];
        // --------------------------------------------------------------------- Weapons
        var weapons = [
            { id: 1, name: 'Glinting Vessel', attack: -5, dodge: 5, damage: 1, hp: -1 },
            { id: 2, name: 'Nightkiss', attack: 4, dodge: -4, damage: -2, hp: 2 },
            { id: 3, name: 'Apostle', attack: -3, dodge: 3, damage: 3, hp: -3 },
            { id: 4, name: 'Dawnlight', attack: 2, dodge: -2, damage: -4, hp: 4 },
            { id: 5, name: 'Nexus', attack: -1, dodge: 1, damage: 5, hp: -5 },
            { id: 6, name: 'Enigma', attack: 5, dodge: 5, damage: -5, hp: -5 }
        ];
        return { heroes: heroes, weapons: weapons };
    };
    return InMemoryDataService;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/InMemoryDbService.service.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_heroes_hero__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_weapons_weapon__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hero_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilteringComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilteringComponent = (function () {
    function FilteringComponent(_heroesService, _weaponsService) {
        this._heroesService = _heroesService;
        this._weaponsService = _weaponsService;
        this.FILTERING_VIEWS = {
            HERO: 'hero',
            WEAPON: 'weapon',
            SEARCH: 'search'
        };
        this.MAX_TOP_ENTITIES = 4;
        this.filterForm = { entity: '', property: '', term: '' };
        this.warfareEntities = [];
        this.formIsShown = false;
        this.currentView = this.FILTERING_VIEWS.HERO;
        this.onClickTopHeroes();
    }
    FilteringComponent.prototype.showForm = function () {
        this.formIsShown = true;
    };
    FilteringComponent.prototype.hideForm = function () {
        this.formIsShown = false;
    };
    // ----------------------------------------------------------------------- PROCESSING
    /**
     * Process to the search after submited form
     */
    FilteringComponent.prototype.validate = function () {
        var _this = this;
        if (this.filterForm.entity === __WEBPACK_IMPORTED_MODULE_1__components_heroes_hero__["a" /* Hero */].name)
            this._heroesService
                .search(this.filterForm.property, this.filterForm.term)
                .then(function (heroes) { return _this.prepareHeroEntities(heroes); });
        else if (this.filterForm.entity === __WEBPACK_IMPORTED_MODULE_2__components_weapons_weapon__["a" /* Weapon */].name)
            this._weaponsService
                .search(this.filterForm.property, this.filterForm.term)
                .then(function (weapons) { return _this.prepareWeaponEntities(weapons); });
    };
    /**
     *  Sort result entity by name DESC
     */
    FilteringComponent.prototype.sortWarfareEntities = function () {
        this.warfareEntities.sort(function (a, b) {
            if (a.getPerformanceIndex() > b.getPerformanceIndex())
                return -1;
            if (a.getPerformanceIndex() < b.getPerformanceIndex())
                return 1;
            return 0;
        });
    };
    /**
     * Convert all items of list to TRUE Hero object
     *
     * @param heroes List to convert
     */
    FilteringComponent.prototype.prepareHeroEntities = function (heroes) {
        this.warfareEntities = [];
        for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
            var hero = heroes_1[_i];
            this.warfareEntities.push(this._heroesService.makeObject(hero));
        }
        this.sortWarfareEntities();
    };
    /**
     *  Convert all items of list to TRUE Weapon object
     *
     * @param weapons List to convert
     */
    FilteringComponent.prototype.prepareWeaponEntities = function (weapons) {
        this.warfareEntities = [];
        for (var _i = 0, weapons_1 = weapons; _i < weapons_1.length; _i++) {
            var weapon = weapons_1[_i];
            this.warfareEntities.push(this._weaponsService.makeObject(weapon));
        }
        this.sortWarfareEntities();
    };
    // ----------------------------------------------------------------------- METHOD On event
    /**
     * Change current view to Top of heroes
     */
    FilteringComponent.prototype.onClickTopHeroes = function () {
        var _this = this;
        this.hideForm();
        this.currentView = this.FILTERING_VIEWS.HERO;
        this._heroesService
            .getHeroes()
            .then(function (heroes) { return _this.prepareHeroEntities(heroes); });
    };
    /**
     * Change current view to Top of weapons
     */
    FilteringComponent.prototype.onClickTopWeapon = function () {
        var _this = this;
        this.hideForm();
        this.currentView = this.FILTERING_VIEWS.WEAPON;
        this._weaponsService
            .getWeapons()
            .then(function (weapons) { return _this.prepareWeaponEntities(weapons); });
    };
    /**
     *  Change current view to Search
     */
    FilteringComponent.prototype.onClickResaerch = function () {
        this.showForm();
        this.warfareEntities = [];
        this.currentView = this.FILTERING_VIEWS.SEARCH;
    };
    FilteringComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-filtering',
            template: __webpack_require__(786)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_weapon_service__["a" /* WeaponService */]) === 'function' && _b) || Object])
    ], FilteringComponent);
    return FilteringComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/filtering.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ui_router_ng2__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsComponent; });
/**
 * Created by SMITHE on 10-Feb-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(_heroService, trans) {
        var _this = this;
        this._heroService = _heroService;
        this._heroService
            .getHero(trans.params().id)
            .then(function (hero) {
            _this.hero = hero;
        });
    }
    HeroDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero-details',
            template: __webpack_require__(787),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ui_router_ng2__["Transition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ui_router_ng2__["Transition"]) === 'function' && _b) || Object])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero-details.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_searchFilter_pipe__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroListComponent = (function () {
    function HeroListComponent(_heroesService) {
        var _this = this;
        this._heroesService = _heroesService;
        this._searchFilter = new __WEBPACK_IMPORTED_MODULE_1__pipes_searchFilter_pipe__["a" /* SearchFilterPipe */]();
        this._heroesService
            .getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes;
        });
        // Subs to adding hero
        this.subscription = this._heroesService
            .addEntityEvent$
            .subscribe(function (hero) {
            _this.heroes.push(hero);
            _this.heroes = _this._searchFilter.transform(_this.heroes, 'name', _this.search);
        });
        // Subs to removing hero
        this.subscription = this._heroesService
            .deleteEntityEvent$
            .subscribe(function (hero) {
            _this.heroes = _this.heroes.filter(function (h) { return h.id !== hero.id; });
            _this.heroes = _this._searchFilter.transform(_this.heroes, 'name', _this.search);
        });
    }
    HeroListComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    HeroListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero-list',
            template: __webpack_require__(788)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object])
    ], HeroListComponent);
    return HeroListComponent;
    var _a;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero-list.componenrt.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_searchFilter_pipe__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeaponListComponent = (function () {
    function WeaponListComponent(_weaponService) {
        var _this = this;
        this._weaponService = _weaponService;
        this._searchFilter = new __WEBPACK_IMPORTED_MODULE_1__pipes_searchFilter_pipe__["a" /* SearchFilterPipe */]();
        this._weaponService
            .getWeapons()
            .then(function (weapons) {
            _this.weapons = weapons;
        });
        // Subs to adding weapon
        this.subscription = this._weaponService
            .addEntityEvent$
            .subscribe(function (weapon) {
            _this.weapons.push(weapon);
            _this.weapons = _this._searchFilter.transform(_this.weapons, 'name', _this.search);
        });
        // Subs to removing weapon
        this.subscription = this._weaponService
            .deleteEntityEvent$
            .subscribe(function (weapon) {
            _this.weapons = _this.weapons.filter(function (w) { return w.id !== weapon.id; });
            _this.weapons = _this._searchFilter.transform(_this.weapons, 'name', _this.search);
        });
    }
    WeaponListComponent.prototype.ngOnDestroy = function () {
        // Prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    WeaponListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'weapon-list',
            template: __webpack_require__(789)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__["a" /* WeaponService */]) === 'function' && _a) || Object])
    ], WeaponListComponent);
    return WeaponListComponent;
    var _a;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon-list.componenrt.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponDetailsComponent; });
/**
 * Created by SMITHE on 10-Feb-17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeaponDetailsComponent = (function () {
    function WeaponDetailsComponent(_weaponService, trans) {
        var _this = this;
        this._weaponService = _weaponService;
        this._weaponService
            .getWeapon(trans.params().id)
            .then(function (weapon) {
            _this.weapon = weapon;
        });
    }
    WeaponDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'weapon-details',
            template: __webpack_require__(790),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_weapon_service__["a" /* WeaponService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ui_router_ng2__["Transition"]) === 'function' && _b) || Object])
    ], WeaponDetailsComponent);
    return WeaponDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/weapon-details.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/environment.js.map

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top\" >\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" >\n\t\t<span class=\"navbar-toggler-icon\" ></span >\n\t</button >\n\t<h1 class=\"navbar-brand mb-0\" >HeroesWarfare</h1 >\n\t\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" >\n\t\t<ul class=\"navbar-nav mr-auto\" >\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" uiSref=\"filtering\" uiSrefActive=\"active\">App\n\t\t\t\t\t<span class=\"sr-only\" >(current)</span ></a >\n\t\t\t</li >\n\t\t\t<li class=\"nav-item\" >\n\t\t\t\t<a class=\"nav-link\" uiSref=\"heroes\" uiSrefActive=\"active\" >Heroes</a >\n\t\t\t</li >\n\t\t\t<li class=\"nav-item\" >\n\t\t\t\t<a class=\"nav-link\" uiSref=\"weapons\" uiSrefActive=\"active\" >Weapons</a >\n\t\t\t</li >\n\t\t</ul >\n\t</div >\n</nav >\n\n<section class=\"d-flex flex-nowrap align-items-stretch flex-row flex-xs-column p-0\" >\n\t<ui-view name=\"subMenu\" id=\"uiv-sub-menu\" class=\"flex-item p-3\" ></ui-view >\n\t<ui-view name=\"content\" id=\"uiv-content\" class=\"flex-item p-0\" ></ui-view >\n</section >\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex head\" [ngClass]=\"{'cardView': options.cardView}\">\n\t<img src=\"{{ entity.pic }}\" class=\"align-items-center justify-content-center img-fluid rounded\" [ngClass]=\"{ 'm-3' :  !options.cardView, 'm-1' : options.cardView }\"/>\n\t<div class=\"align-items-center d-flex justify-content-center\">\n\t\t<h2 class=\"my-2\">\n\t\t\t{{ entity.name }}\n\t\t\t<a *ngIf=\"options.cardView && entity.isHero()\" uiSref=\"heroes_show\" [uiParams]=\"{ id: entity.id }\" title=\"See\"><i class=\"fa fa-eye\"></i></a>\n\t\t\t<a *ngIf=\"options.cardView && entity.isWeapon()\" uiSref=\"weapons_show\" [uiParams]=\"{ id: entity.id }\" title=\"See\"><i class=\"fa fa-eye\"></i></a>\n\t\t</h2>\n\t</div>\n</div>\n<div class=\"d-flex justify-content-center properties p-0\" *ngIf=\"entity\">\n\t<div class=\"entity-property px-3 py-2 btn-change\"\n\t\t*ngIf=\"!options.cardView\"\n\t\tplacement=\"top\" tooltip=\"Absolute value it's the value was effective in game\"\n\t>\n\t\t<label class=\"custom-control custom-checkbox entity-property m-0\">\n\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"showAbsolutValueProperties\" [(ngModel)]=\"showAbsoluteValueProperties\">\n\t\t\t<span class=\"custom-control-indicator\"></span>\n\t\t\t<span class=\"custom-control-description\">Absolute values <i class=\"fa fa-question-circle text-primary\" aria-hidden=\"true\"></i></span>\n\t\t</label>\n\t</div>\n\t<div class=\"entity-property px-3 attack\" [ngClass]=\"{ 'py-2' :  !options.cardView, 'py-1' : options.cardView }\">\n\t\t<img src=\"../../../../assets/img/attack.png\" class=\"mr-1\"\n\t\t\tplacement=\"top\" tooltip=\"Points assigned to Attack property\"/>\n\t\t<span *ngIf=\"!showAbsoluteValueProperties\">{{ entity.attack }}</span>\n\t\t<span *ngIf=\"showAbsoluteValueProperties\">{{ entity.getAbsoluteAttack() }} to {{ entity.getAbsoluteAttack( 3 ) }}</span>\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && !showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on attack points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.attack >= 0, 'badge-danger' : entity.weapon.attack < 0}\">\n\t\t\t\t{{ ( (entity.weapon.attack  > 0) ? '+' : '' ) + entity.weapon.attack }}\n\t\t\t</span>\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on attack points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.attack >= 0, 'badge-danger' : entity.weapon.attack < 0}\">\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteAttack()  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteAttack() }} to\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteAttack(3)  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteAttack(3) }}\n\t\t\t</span>\n\t</div>\n\t<div class=\"entity-property px-3 dodge\" [ngClass]=\"{ 'py-2' :  !options.cardView, 'py-1' : options.cardView }\">\n\t\t<img src=\"../../../../assets/img/dodge.png\" class=\"mr-1\"\n\t\t\tplacement=\"top\" tooltip=\"Points assigned to Dodge property\"/>\n\t\t<span *ngIf=\"!showAbsoluteValueProperties\">{{ entity.dodge }}</span>\n\t\t<span *ngIf=\"showAbsoluteValueProperties\">{{ entity.getAbsoluteDodge() }} to {{ entity.getAbsoluteDodge( 3 ) }}</span>\n\t\t\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && !showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on dodge points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.dodge >= 0, 'badge-danger' : entity.weapon.dodge < 0}\">\n\t\t\t\t{{ ( (entity.weapon.dodge  > 0) ? '+' : '' ) + entity.weapon.dodge }}\n\t\t\t</span>\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on dodge points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.dodge >= 0, 'badge-danger' : entity.weapon.dodge < 0}\">\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteDodge()  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteDodge() }} to\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteDodge(3)  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteDodge(3) }}\n\t\t\t</span>\n\t</div>\n\t<div class=\"entity-property px-3 damage\" [ngClass]=\"{ 'py-2' :  !options.cardView, 'py-1' : options.cardView }\">\n\t\t<img src=\"../../../../assets/img/damage.png\" class=\"mr-1\"\n\t\t\tplacement=\"top\" tooltip=\"Points assigned to Damage property\"/>\n\t\t<span *ngIf=\"!showAbsoluteValueProperties\">{{ entity.damage }}</span>\n\t\t<span *ngIf=\"showAbsoluteValueProperties\">{{ entity.getAbsoluteDamage() }} to {{ entity.getAbsoluteDamage( 3 ) }}</span>\n\t\t\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && !showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on damage points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.damage >= 0, 'badge-danger' : entity.weapon.damage < 0}\">\n\t\t\t\t{{ ( (entity.weapon.damage  > 0) ? '+' : '' ) + entity.weapon.damage }}\n\t\t\t</span>\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on damage points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.damage >= 0, 'badge-danger' : entity.weapon.damage < 0}\">\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteDamage()  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteDamage() }} to\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteDamage(3)  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteDamage(3) }}\n\t\t\t</span>\n\t</div>\n\t<div class=\"entity-property px-3 hp\" [ngClass]=\"{ 'py-2' :  !options.cardView, 'py-1' : options.cardView }\">\n\t\t<img src=\"../../../../assets/img/hp.png\" class=\"mr-1\"\n\t\t\tplacement=\"top\" tooltip=\"Points assigned to HP property\"/>\n\t\t<span *ngIf=\"!showAbsoluteValueProperties\">{{ entity.hp }}</span>\n\t\t<span *ngIf=\"showAbsoluteValueProperties\">{{ entity.getAbsoluteHp() }}</span>\n\t\t\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on health points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.hp >= 0, 'badge-danger' : entity.weapon.hp < 0}\">\n\t\t\t\t{{ ( (entity.weapon.hp  > 0) ? '+' : '' ) + entity.weapon.hp }}\n\t\t\t</span>\n\t\t<span class=\"badge badge-pill\"\n\t\t\t*ngIf=\"entity.isHero() && entity.weapon && !showAbsoluteValueProperties\"\n\t\t\tplacement=\"top\" tooltip=\"Impact of weapon carried on health points Hero\"\n\t\t\t[ngClass]=\"{'badge-success': entity.weapon.hp >= 0, 'badge-danger' : entity.weapon.hp < 0}\">\n\t\t\t\t{{ ( (entity.weapon.getAbsoluteHp()  > 0) ? '+' : '' ) + entity.weapon.getAbsoluteHp() }}\n\t\t\t</span>\n\t</div>\n\t\n\t<div class=\"entity-property px-3 dodge\" [ngClass]=\"{ 'py-2' :  !options.cardView, 'py-1' : options.cardView }\">\n\t\t<img src=\"../../../../assets/img/perf_index.png\" alt=\"\" class=\"mr-1\"\n\t\t\tplacement=\"top\" tooltip=\"Number to evaluate the performance of {{ entity.isHero() ? 'hero' : 'weapon' }}\"\n\t\t/>\n\t\t<span>{{  entity.getPerformanceIndex()  }}</span>\n\t</div>\n</div>\n<div class=\"d-flex justify-content-center text-center p-1 m-auto\" *ngIf=\"options.actionBtn\">\n\t<div class=\"d-inline-block\">\n\t\t<a uiSref=\"{{ ( entity.isHero() ) ? 'heroes_edit' : 'weapons_edit' }}\" [uiParams]=\"{ id: entity.id }\" class=\"btn btn-outline-info btn-xs px-2 py-0 mr-1\">Edit</a>\n\t\t<a href=\"\" class=\"btn btn-outline-danger btn-xs px-2 py-0\">Delete</a>\n\t</div>\n</div>"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<section class=\"p-3\">\n\t<h1 class=\"text-center\">Heroes Warfare</h1>\n\t<p class=\"text-center\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, alias aperiam architecto\n\t\t\t       assumenda atque commodi, consequuntur corporis cum cupiditate distinctio eaque expedita hic id\n\t\t\t       illum ipsam iure iusto labore minima molestias neque non nostrum pariatur quibusdam rem saepe\n\t\t\t       sit tenetur ullam velit vero? Accusantium ad adipisci alias architecto blanditiis consequuntur debitis\n\t\t\t       deleniti deserunt distinctio dolorem eum excepturi incidunt inventore ipsa molestias natus necessitatibus\n\t\t\t       neque obcaecati omnis reprehenderit, sed, sequi ut vel veniam vitae voluptate voluptatibus voluptatum!\n\t\t\t       Aliquid atque deserunt earum incidunt iste itaque molestiae nihil nisi quis reiciendis. Adipisci dignissimos\n\t\t\t       ex, ipsa iste iusto laborum officia quo recusandae vel.</p>\n\t\n\t<p class=\"text-center\">\n\t\t<button class=\"btn btn-outline-primary \"\n\t\t\t[ngClass]=\"{ 'active' : currentView === FILTERING_VIEWS.HERO }\"\n\t\t\t(click)=\"onClickTopHeroes()\">Top Heroes\n\t\t</button>\n\t\t<button class=\"btn btn-outline-info\"\n\t\t\t[ngClass]=\"{ 'active' : currentView === FILTERING_VIEWS.WEAPON }\"\n\t\t\t(click)=\"onClickTopWeapon()\">Top Weapons\n\t\t</button>\n\t\t<button class=\"btn btn-outline-success\"\n\t\t\t[ngClass]=\"{ 'active' : currentView === FILTERING_VIEWS.SEARCH }\"\n\t\t\t(click)=\"onClickResaerch()\">Research\n\t\t</button>\n\t</p>\n\t\n\t<hr [hidden]=\"!formIsShown\"/>\n\t<form (submit)=\"validate()\" flatizer-label-form [hidden]=\"!formIsShown\" #form=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"term\">Term</label>\n\t\t\t<input type=\"search\" name=\"term\" id=\"term\" class=\"form-control\" [(ngModel)]=\"filterForm.term\" required>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"term\">Entity</label>\n\t\t\t<select name=\"entity\" id=\"entity\" class=\"form-control\" [(ngModel)]=\"filterForm.entity\" required>\n\t\t\t\t<option value=\"Hero\">Hero</option>\n\t\t\t\t<option value=\"Weapon\">Weapon</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"form-group\" [hidden]=\"!filterForm.entity\">\n\t\t\t<label for=\"term\">Property</label>\n\t\t\t<select name=\"property\" id=\"property\" class=\"form-control\" [(ngModel)]=\"filterForm.property\" required>\n\t\t\t\t<option value=\"name\">Name</option>\n\t\t\t\t<option value=\"attack\">Attack</option>\n\t\t\t\t<option value=\"dodge\">Dodge</option>\n\t\t\t\t<option value=\"damage\">Damage</option>\n\t\t\t\t<option value=\"hp\">HP</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" [hidden]=\"!filterForm.entity\">Find</button>\n\t</form>\n\t\n\t<hr *ngIf=\"warfareEntities\"/>\n\t<h5 class=\"text-center\" *ngIf=\"currentView !== FILTERING_VIEWS.SEARCH \">Top 4</h5>\n\t<p class=\"text-right\" *ngIf=\"currentView === FILTERING_VIEWS.SEARCH && form._submitted && warfareEntities\"> {{ warfareEntities.length }} result(s)</p>\n\t<p class=\"text-right\" *ngIf=\"currentView === FILTERING_VIEWS.SEARCH && form._submitted && !warfareEntities\"> No result</p>\n\t<div class=\"row\">\n\t\t<warfare-entity-header *ngFor=\"let entity of warfareEntities | limit : MAX_TOP_ENTITIES\" [entity]=\"entity\" [options]=\"{ actionBtn: false, cardView: true }\" class=\"col-6 my-2\"></warfare-entity-header>\n\t</div>\n</section>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"hero\" >\n\t<warfare-entity-header [entity]=\"hero\" ></warfare-entity-header >\n\t\n\t<div class=\"card-columns col-xs-12 p-3\" >\n\t\t<div class=\"card card-inverse\" >\n\t\t\t<div class=\"card-block\" >\n\t\t\t\t<h4 class=\"card-title\" >History</h4 >\n\t\t\t\t<p class=\"card-text\" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eos error est fuga fugit ipsa iure omnis quidem voluptatum. Aut, autem beatae consectetur consequatur dicta dolorem hic incidunt inventore iure mollitia provident rem suscipit tempora. Autem corporis dolorum ex, in nihil saepe sint tempora temporibus vel vero. Dolore harum id quasi voluptas? Ab alias assumenda at ea incidunt, magni natus nemo nesciunt nisi officia omnis, possimus quaerat quam rem tenetur veritatis voluptates. Adipisci, eveniet, ipsa. Accusamus ad alias aliquam architecto consequatur cum dolor doloribus eos esse, expedita explicabo facilis fuga, fugit illum impedit iste iure laudantium modi neque nobis odio officia perferendis perspiciatis quae quidem quisquam quos tempora ullam unde voluptatibus? Ad enim eum laborum. Aliquid aperiam aut cumque deleniti dolor dolorum eaque earum, eius explicabo fugit labore odit quaerat, quia quibusdam tenetur ullam, unde! Architecto culpa enim ex harum incidunt, nam quas qui unde velit voluptatum! Architecto, inventore.</p >\n\t\t\t</div >\n\t\t</div >\n\t\t<div class=\"card card-inverse\" >\n\t\t\t<img class=\"card-img-top img-fluid\" src=\"../../../../assets/img/motif.png\" />\n\t\t\t<div class=\"card-block\" >\n\t\t\t\t<h4 class=\"card-title\" >Card title</h4 >\n\t\t\t\t<p class=\"card-text\" >This card has supporting text below as a natural lead-in to additional content.</p >\n\t\t\t\t<p class=\"card-text\" >\n\t\t\t\t\t<small class=\"text-muted\" >Last updated 3 mins ago</small >\n\t\t\t\t</p >\n\t\t\t</div >\n\t\t</div >\n\t\t<div class=\"card card-inverse card-primary text-center\" >\n\t\t\t<div class=\"card-header\" >Weapon carried</div >\n\t\t\t<img class=\"card-img-top img-fluid pt-3\" src=\"{{ hero.weapon.pic }}\" *ngIf=\"hero.weapon\"/>\n\t\t\t<div class=\"card-block\" *ngIf=\"hero.weapon\" >\n\t\t\t\t<h4 class=\"card-title\" >{{ hero.weapon.name }}</h4 >\n\t\t\t\t<blockquote class=\"card-blockquote\" >\n\t\t\t\t\t<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis commodi consectetur cum deleniti doloremque facere fugiat incidunt, itaque, iusto laboriosam maiores, perferendis quos saepe sunt unde voluptates voluptatum!</p >\n\t\t\t\t</blockquote >\n\t\t\t</div >\n\t\t\t<p class=\"card-block\" *ngIf=\"!hero.weapon\" >\n\t\t\t\tNo carried weapon yet\n\t\t\t</p >\n\t\t</div >\n\t</div >\n</section >"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<h2 >Heroes <a uiSref=\"heroes_new\" class=\"btn btn-outline-primary btn-xs\" >New</a ></h2 >\n<form >\n\t<div class=\"form-group\" >\n\t\t<input type=\"search\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"Researching ...\" [(ngModel)]=\"search\" >\n\t</div >\n</form >\n<ul class=\"nav flex-column\" >\n\t<li *ngFor=\"let hero of heroes | searchFilter : 'name' : search\" class=\"nav-item\" >\n\t\t<a class=\"nav-link\" uiSref=\"heroes_show\" [uiParams]=\"{ id: hero.id }\" >{{hero.name}}</a >\n\t</li >\n</ul >"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<h2 >Weapons <a uiSref=\"weapons_new\" class=\"btn btn-outline-primary btn-xs\" >New</a ></h2 >\n<form >\n\t<div class=\"form-group\" >\n\t\t<input type=\"search\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"Researching ...\" [(ngModel)]=\"search\" >\n\t</div >\n</form >\n<ul class=\"nav flex-column\" >\n\t<li *ngFor=\"let weapon of weapons | searchFilter : 'name' : search\" class=\"nav-item\" >\n\t\t<a class=\"nav-link\" uiSref=\"weapons_show\" [uiParams]=\"{ id: weapon.id }\" >{{weapon.name}}</a >\n\t</li >\n</ul >\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"weapon\" >\n\t\n\t<warfare-entity-header [entity]=\"weapon\" ></warfare-entity-header >\n\t\n\t<div class=\"card-columns col-xs-12 p-3\" >\n\t\t<div class=\"card card-inverse\" >\n\t\t\t<div class=\"card-block\" >\n\t\t\t\t<h4 class=\"card-title\" >History</h4 >\n\t\t\t\t<p class=\"card-text\" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eos\n\t\t\t\t\terror est fuga fugit ipsa iure omnis quidem voluptatum. Aut, autem beatae consectetur consequatur\n\t\t\t\t\tdicta dolorem hic incidunt inventore iure mollitia provident rem suscipit tempora. Autem corporis\n\t\t\t\t\tdolorum ex, in nihil saepe sint tempora temporibus vel vero. Dolore harum id quasi voluptas? Ab\n\t\t\t\t\talias assumenda at ea incidunt, magni natus nemo nesciunt nisi officia omnis, possimus quaerat quam\n\t\t\t\t\trem tenetur veritatis voluptates. Adipisci, eveniet, ipsa. Accusamus ad alias aliquam architecto\n\t\t\t\t\tconsequatur cum dolor doloribus eos esse, expedita explicabo facilis fuga, fugit illum impedit iste\n\t\t\t\t\tiure laudantium modi neque nobis odio officia perferendis perspiciatis quae quidem quisquam quos\n\t\t\t\t\ttempora ullam unde voluptatibus? Ad enim eum laborum. Aliquid aperiam aut cumque deleniti dolor\n\t\t\t\t\tdolorum eaque earum, eius explicabo fugit labore odit quaerat, quia quibusdam tenetur ullam, unde!\n\t\t\t\t\tArchitecto culpa enim ex harum incidunt, nam quas qui unde velit voluptatum! Architecto,\n\t\t\t\t\tinventore.</p >\n\t\t\t</div >\n\t\t</div >\n\t\t<div class=\"card card-inverse\" >\n\t\t\t<img class=\"card-img-top img-fluid\" src=\"../../../../assets/img/motif.png\" />\n\t\t\t<div class=\"card-block\" >\n\t\t\t\t<h4 class=\"card-title\" >Card title</h4 >\n\t\t\t\t<p class=\"card-text\" >This card has supporting text below as a natural lead-in to additional\n\t\t\t\t\tcontent.</p >\n\t\t\t\t<p class=\"card-text\" >\n\t\t\t\t\t<small class=\"text-muted\" >Last updated 3 mins ago</small >\n\t\t\t\t</p >\n\t\t\t</div >\n\t\t</div >\n\t</div >\n</section >"

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(468);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_commons_base_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weapon_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Created by SMITHE on 10-Feb-17.
 */
/**
 * Hero service
 */
var HeroService = (function (_super) {
    __extends(HeroService, _super);
    function HeroService(_http, _weaponService) {
        _super.call(this, _http);
        this._weaponService = _weaponService;
    }
    HeroService.prototype.BASE_PATH_ENTITY = function () {
        return _super.prototype.BASE_PATH_ENTITY.call(this) + '/heroes';
    };
    // ----------------------------------------------------------------------- REST Method
    /**
     * Get all heroes
     * @returns {Promise<Hero[]>} List of Heroes
     */
    HeroService.prototype.getHeroes = function () {
        var path = this.BASE_PATH_ENTITY();
        var callback = function (response) { return response.json().data; };
        return this.get(path, callback);
    };
    /**
     * Get specific hero
     *
     * @param id ID of Hero
     * @returns {Promise<Hero>} Hero
     */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + id;
        var callback = function (response) { return _this.makeObject(response.json().data); };
        return this.get(path, callback);
    };
    /**
     * Update new hero
     *
     * @param hero Hero to update
     * @returns {Promise<Hero>} Hero updated
     */
    HeroService.prototype.putHero = function (hero) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + hero.id;
        var callback = function () {
            _this.announceNewEntity(hero);
            return _this.makeObject(hero);
        };
        return this.put(path, hero.serialize(), callback);
    };
    /**
     * Add new hero
     *
     * @param hero Hero to add
     * @returns {Promise<Hero>} Hero added
     */
    HeroService.prototype.postHero = function (hero) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + hero.id;
        var callback = function (res) {
            _this.announceNewEntity(hero);
            return _this.makeObject(res.json().data);
        };
        return this.post(path, hero.serialize(), callback);
    };
    /**
     *  Delete heroe
     *
     * @param hero Hero to delete
     * @returns {Promise<void>}
     */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var path = this.BASE_PATH_ENTITY() + '/' + hero.id;
        var callback = function () { return _this.announceDeleteEntity(hero); };
        return this.remove(path, callback);
    };
    /**
     *  Search hero with params
     *
     * @param property Property  where do the search
     * @param value Term to search
     * @returns {Promise<any>} List of Heroes corresponding to the search
     */
    HeroService.prototype.search = function (property, value) {
        var path = this.BASE_PATH_ENTITY() + '/?' + property + '=^' + (Number(value) || value);
        var callback = function (response) { return response.json().data; };
        return this.get(path, callback);
    };
    // ----------------------------------------------------------------------- SERVICE Method
    /**
     * Create a TRUE Hero object
     *
     * @param hero Object to convert
     * @returns {Hero} TRUE Hero object
     */
    HeroService.prototype.makeObject = function (hero) {
        var h = new __WEBPACK_IMPORTED_MODULE_4__components_heroes_hero__["a" /* Hero */]();
        h.copyFrom(hero);
        if (h.weapon)
            h.weapon = this._weaponService.makeObject(h.weapon);
        return h;
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__weapon_service__["a" /* WeaponService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__weapon_service__["a" /* WeaponService */]) === 'function' && _b) || Object])
    ], HeroService);
    return HeroService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__components_commons_base_service__["a" /* BaseService */]));
//# sourceMappingURL=/home/esm/Work/Mutu/Projets/heroesWarfare/src/hero.service.js.map

/***/ })

},[835]);
//# sourceMappingURL=main.bundle.map