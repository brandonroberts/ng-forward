// Classes
import Module from './classes/module';
import Metastore from './classes/metastore';
import { OpaqueToken } from './classes/opaque-token';
import { Provider, provide } from './classes/provider';

// Decorators
import { Component } from './decorators/component';
import { Directive } from './decorators/directive';
import { Inject } from './decorators/inject';
import { Injectable } from './decorators/injectable';
import { Pipe } from './decorators/pipe';
import { Providers } from './decorators/providers';
import { Input, Output } from './decorators/input-output';

// Events
import events from './events/events';
import EventEmitter from './events/event-emitter';

// Functions
import bootstrap from './bootstrap';
import bundle from './bundle';
import {getInjectableName} from './util/get-injectable-name';

// Writers
import { bundleStore, providerStore, componentStore } from './writers';

// JQLite extensions
import './util/jqlite-extensions';


export {
	// Classes
	Module,
	Metastore,
	OpaqueToken,
	Provider,
	provide,
	
	// Decorators
	Component,
	Directive,
	Inject,
	Injectable,
	Pipe,
	Providers,
	Input,
	Output,
	
	// Events
	events,
	EventEmitter,
	
	// Functions
	bootstrap,
	bundle,
	getInjectableName,
	
	// Writers
	bundleStore,
	providerStore,
	componentStore
};