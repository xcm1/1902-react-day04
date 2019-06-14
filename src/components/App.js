import React, { Component } from 'react';

function fn (user) {
  return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: "wu",
  lastname: 'daxun'
}

const Com = <div>hello, { fn(user) }</div>

export default Com;
