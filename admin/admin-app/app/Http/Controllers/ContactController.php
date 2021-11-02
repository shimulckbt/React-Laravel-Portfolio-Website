<?php

namespace App\Http\Controllers;
use App\Models\ContactTableModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function ContactList(){
        $result = ContactTableModel::all();
        return $result;
    }
}
