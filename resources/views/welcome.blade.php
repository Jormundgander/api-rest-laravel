<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    <style>
        body {
            background: #c31432 !important;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #240b36, #c31432) !important;  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #240b36, #c31432) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            color: #FFF;
            overflow-x: hidden;
        }
        .nav-link, th, td {
            color: #FFF;
        }
        .nav-link:hover {
            color: #FFF;
            text-decoration: none;
            border-bottom: 1px solid #FFF;
        }
        .createAccount {
            padding: 4px 10px 4px 10px;
            font-weight: bold;
            border-radius: 15px;
            color: #F2F2F2;
            background:rgb(27, 27, 27);
        }
        .createAccount:hover {
            text-decoration: none;
            color: #F2F2F2;
            background: rgb(31, 31, 31);
            border: none;
        },
        .deleteAccount {
            color: #e71e10;
        }
        .btn-primary {
            background: rgb(27, 27, 27);
            border: none;
        }
        .btn-primary:hover {
            background: rgb(31, 31, 31);
            border: none;
        }
    </style>

    </head>
    <body>

        <div id="app"></div>

    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
