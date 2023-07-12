import { initHtml } from './init-html';
import { home, menu, contact } from './render';
import './style.css';


initHtml();

const homeBtn = document.getElementById('home');
homeBtn.onclick = () => home();

const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => menu();

const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => contact();

home();
