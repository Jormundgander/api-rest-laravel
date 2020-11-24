<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;

class BalanceController extends Controller
{
    public function show(Account $account)
    {
    	/*$accountID = $request->input('account_id');
    	$account = Account::findOrFail($accountID);
        */

        return $account->balance;
    }
}
