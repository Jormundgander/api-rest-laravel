<?php

namespace App\Http\Controllers;

use App\Account;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class EventController extends Controller
{
    public function getAccounts()
    {
        return response()->json(Account::all(), 200);
    }

	// 201 {"destination": {"id":"100", "balance":10}}
	// Create account with initial balance
	// POST /event {"type":"deposit", "destination":"100", "amount":10}
    public function handleEvents(Request $request)
    {
    	if($request->input('type') === 'create') {
    		return $this->create(
    			$request->input('origin')
    		);
        } elseif($request->input('type') === 'deposit') {
    		return $this->deposit(
    			$request->input('destination'),
    			$request->input('amount')
    		);
    	} elseif($request->input('type') === 'withdraw') {
    		return $this->withdraw(
    			$request->input('origin'),
    			$request->input('amount')
    		);
    	} elseif($request->input('type') === 'transfer') {
    		return $this->transfer(
    			$request->input('origin'),
    			$request->input('destination'),
    			$request->input('amount')
    		);
        } elseif($request->input('type') === 'update') {
    		return $this->update(
                $request->input('origin'),
                $request->input('amount')
    		);
    	} elseif($request->input('type') === 'delete') {
    		return $this->delete(
    			$request->input('origin')
    		);
    	}
    }

    private function create($origin)
    {
    	$account = Account::create([
    		'id' => $origin
    	]);

    	$account->save();

    	return response()->json([
    		'origin' => [
    			'id' => $account->id,
    			'balance' => $account->balance
    		]
    	], 201);
    }

    private function deposit($destination, $amount)
    {
    	$account = Account::firstOrCreate([
    		'id' => $destination
    	]);

    	$account->balance += $amount;
    	$account->save();

    	return response()->json([
    		'destination' => [
    			'id' => $account->id,
    			'balance' => $account->balance
    		]
    	], 201);
    }

    private function withdraw($origin, $amount)
    {
    	$account = Account::findOrFail($origin);

    	$account->balance -= $amount;
    	$account->save();

    	return response()->json([
    		'origin' => [
    			'id' => $account->id,
    			'balance' => $account->balance
    		]
    	], 201);
    }

    private function transfer($origin, $destination, $amount)
    {
    	/*Transfer from existing account
		POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}

		201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
		Transfer from non-existing account
		POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}*/

		$originAccount = Account::findOrFail($origin);
		$destinationAccount = Account::firstOrCreate([
			'id' => $destination
		]);

    	DB::transaction(function () use ($originAccount, $destinationAccount, $amount) {

		    $originAccount->balance -= $amount;
		    $destinationAccount->balance += $amount;

		    $originAccount->save();
            $destinationAccount->save();

		});

		return response()->json([
			'origin' => [
    			'id' => $originAccount->id,
    			'balance' => $originAccount->balance
    		],
    		'destination' => [
    			'id' => $destinationAccount->id,
    			'balance' => $destinationAccount->balance
    		]
    	], 201);
    }

    private function update($origin, $mount)
    {
    	$account = Account::findOrFail($origin);

        $account->balance += $mount;

    	$account->save();

    	return response()->json([
    		'Message' => 'Billetera actualizada exitosamente'
    	], 200);
    }

    private function delete($origin)
    {
    	$account = Account::findOrFail($origin);

    	$account->delete();

    	return response()->json([
    		'Message' => 'Billetera eliminada exitosamente'
    	], 200);
    }
}
