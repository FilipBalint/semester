import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupFits = defineStore('fits', {
  state: () => ({
    data: data.fits,
  }), 
});
