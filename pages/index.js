
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const TextEditor = dynamic(import('../components/textEditor'), {
  ssr: false
})
export default function IndexPage() {
  return (
    <div>
	       <TextEditor lan='javascript' theme="twilight"/>
          </div>
  );
}
