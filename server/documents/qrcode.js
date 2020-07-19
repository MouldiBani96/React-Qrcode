import qrcode from "qrcode.react";
import React, { Component } from 'react';

//npm install --save qrcode
const  Qr = require("qrcode");

export class qrcode extends React.Component {
	state = {
		movies: getMovies()
	}

	constructor(props) {
		super(props);

		this.deleteMovie = this.deleteMovie.bind(this);

    }
      creatQrcode(filename,data){
         Qr.toFile("Qrcodes/"+filename+".png",data,{Width:500});
      }
}
