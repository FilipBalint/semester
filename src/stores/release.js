import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupReleases = defineStore('release', {
  state: () => ({
    data: data.zoznamRelease,
  }), 
});
