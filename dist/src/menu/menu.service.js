"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetThirdPartyMenu = void 0;
const title_mapper_1 = require("./util/title-mapper");
const ApiURL = "http://backend-challenge-pos.pepperhq.com/menu.json";
const GetThirdPartyMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('making request to third party API');
    const menu = yield fetch(ApiURL).then(res => res.json());
    return (0, title_mapper_1.MapTitles)(menu);
});
exports.GetThirdPartyMenu = GetThirdPartyMenu;
