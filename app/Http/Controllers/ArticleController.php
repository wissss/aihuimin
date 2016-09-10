<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis as Redis;
use App\Http\Requests;

class ArticleController extends Controller
{
    public function index()
    {
        return view("menu.article");
    }
}