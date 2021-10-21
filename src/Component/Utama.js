import React from "react";
import { Switch, Route } from "react-router-dom";

// halaman
import Beranda from "../pages/beranda";
import Berita from "../pages/berita";
import Sebaran from "../pages/sebaran";
import Informasi from "../pages/informasi";

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/berita" component={Berita} />
        <Route path="/sebaran" component={Sebaran} />
        <Route path="/informasi" component={Informasi} />
    </Switch>
)

export default Utama;

