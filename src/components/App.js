import React, { Component } from 'react';
import Home from '@/components/Home';
import '@/main';

function fn (user) {
  return user.firstname + " " + user.lastname;
}
const user = {
  firstname: 'wu',
  lastname: 'daxun'
}

const Com = <div>hello, { fn(user) }</div>
export default Com;