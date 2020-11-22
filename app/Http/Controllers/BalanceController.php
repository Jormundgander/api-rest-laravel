<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;

class BalanceController extends Controller
{
    public function show(Request $request) 
    {
    	$accountID = $request->input('account_id');
    	$account = Account::findOrFail($accountID);
    	return $account->balance;
    }
}
