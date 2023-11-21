import { users } from "./Apresentacao";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Endereco } from "../components/Endereco/Endereco";
import { useParams } from "react-router-dom";

export function Details () {
	const { userId } = useParams();
	return (
	<>
	<Endereco userId={userId} />
	</>
  )
};

